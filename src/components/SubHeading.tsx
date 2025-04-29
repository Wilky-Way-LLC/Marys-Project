type SubheadingProps = {
    text: string;
    color?: string; // Accepts any valid CSS color value
  };
  
  export default function Subheading({ text, color = '#4b91b2' }: SubheadingProps) {
    return (
      <div className="inline-block text-center">
        <p
          className="text-sm sm:text-md font-normal inline-block relative"
          style={{ color }}
        >
          {text}
          <span
            className="absolute left-0 -bottom-1 h-[1px]"
            style={{
              width: '100%',
              backgroundColor: color,
              opacity: 0.3,
            }}
          />
        </p>
      </div>
    );
  }