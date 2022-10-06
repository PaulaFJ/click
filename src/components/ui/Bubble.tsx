interface BubbleProps {
  top?: string;
  left?: string;
  right?: string;
  width?: string;
  height?: string;
}

export function Bubble({top, left, right, width, height}: BubbleProps) {
  return (
    <div className="w-8 h-8 bg-[#6730e266] rounded-full absolute content-none top-0 bottom-0 hidden xl:block" style={{top: top, left: left, right: right, width: width, height: height}}></div>
  )
}