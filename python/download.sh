#!/bin/bash

# Variables
PYTHON_VERSION="3.12.6" # edit only

PYTHON_TAR="Python-$PYTHON_VERSION.tgz"
PYTHON_URL="https://www.python.org/ftp/python/$PYTHON_VERSION/$PYTHON_TAR"

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check if the user is root or has sudo privileges
if (( $EUID != 0 )); then
    if command_exists sudo; then
        echo "Using sudo for privileged operations."
        SUDO="sudo"
    else
        echo "This script requires root privileges. Please run as root or ensure sudo is installed."
        exit 1
    fi
else
    echo "Running as root."
    SUDO=""
fi

echo "Updating the package list and installing dependencies..."

$SUDO apt update && $SUDO apt install -y \
    make build-essential libssl-dev zlib1g-dev \
    libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm \
    libncurses5-dev libncursesw5-dev xz-utils tk-dev \
    libffi-dev liblzma-dev python3-openssl git

echo "Downloading Python $PYTHON_VERSION..."
wget $PYTHON_URL

echo "Extracting Python..."
tar -xf $PYTHON_TAR
cd "Python-$PYTHON_VERSION"

echo "Configuring the build..."
./configure --enable-optimizations

echo "Compiling Python..."
make -j$(nproc)

echo "Installing Python..."
$SUDO make altinstall

echo "Cleaning up..."
cd ..
rm -rf "Python-$PYTHON_VERSION" $PYTHON_TAR

echo "Verifying the installation..."
python3 --version

echo "Python $PYTHON_VERSION installed successfully!"