#!/bin/bash

# Variables
PYTHON_VERSION="3.12.6" # edit only

PYTHON_TAR="Python-$PYTHON_VERSION.tgz"
PYTHON_URL="https://www.python.org/ftp/python/$PYTHON_VERSION/$PYTHON_TAR"

# Update and install dependencies
echo "Updating the package list and installing dependencies..."

sudo apt update && sudo apt install -y \
    make build-essential libssl-dev zlib1g-dev \
    libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm \
    libncurses5-dev libncursesw5-dev xz-utils tk-dev \
    libffi-dev liblzma-dev python3-openssl git

# Download Python source code
echo "Downloading Python $PYTHON_VERSION..."
wget $PYTHON_URL

# Extract the downloaded tarball
echo "Extracting Python $PYTHON_VERSION..."
tar -xf $PYTHON_TAR
cd "Python-$PYTHON_VERSION"

# Configure and compile
echo "Configuring the build..."
./configure --enable-optimizations

echo "Compiling Python $PYTHON_VERSION..."
make -j$(nproc)

# Install Python
echo "Installing Python $PYTHON_VERSION..."
sudo make altinstall

# Clean up
echo "Cleaning up..."
cd ..
rm -rf "Python-$PYTHON_VERSION" $PYTHON_TAR

# Verify installation
echo "Verifying the installation..."
python3 --version

echo "Python $PYTHON_VERSION installed successfully!"