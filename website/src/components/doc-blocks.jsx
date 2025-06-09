
export const CodeBlock = ({ lang, children }) => {
  return (
    <div className={`my-6 p-4 rounded-xl border-2 border-gray-500 font-mono`}>
      {lang && <h4 className="text-xs font-extrabold mb-2 uppercase">{lang}</h4>}

      <div className="text-lg leading-relaxed">{children}</div>
    </div>
  );
};


export const InfoBlock = ({ title, children }) => {
  return (
    <div className={`my-6 p-4 rounded-xl border-2 border-blue-300 font-mono`}>
      {title && <h4 className="font-extrabold mb-2 text-lg uppercase">{title}</h4>}
      
      <div className="text-[1rem] leading-relaxed">
        {children}
      </div>
    </div>
  );
};

export const NoteBlock = ({ title, children }) => {
  return (
    <div className={`my-6 p-4 rounded-xl border-2 border-green-300 font-mono`}>
      {title && <h4 className="font-extrabold mb-2 text-sm uppercase">{title}</h4>}
      
      <div className="text-[1rem] leading-relaxed">
        {children}
      </div>
    </div>
  );
};

export const WarningBlock = ({ title, children }) => {
  return (
    <div className={`my-6 p-4 rounded-xl border-2 border-yellow-300 font-mono`}>
      {title && <h4 className="font-extrabold mb-2 text-sm uppercase">{title}</h4>}
      
      <div className="text-[1rem] leading-relaxed">
        {children}
      </div>
    </div>
  );
};

export const CautionBlock = ({ title, children }) => {
  return (
    <div className={`my-6 p-4 rounded-xl border-2 border-red-500 font-mono`}>
      {title && <h4 className="font-extrabold mb-2 text-sm uppercase">{title}</h4>}
      
      <div className="text-[1rem] leading-relaxed">
        {children}
      </div>
    </div>
  );
};
