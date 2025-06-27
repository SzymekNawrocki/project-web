type FrameProps = {
  children: React.ReactNode;
  title?: string;
  transparent?: boolean;
  titleAlignment?: "left" | "center" | "right";
  additionalClasses?: string;
};

export const Frame = (props: FrameProps) => {
  let titleClasses = "text-primary text-2xl font-semibold mb-2";
  let frameClasses =
    "text-secondary px-4 py-2 rounded-lg border-2 border-primary block";

  if (!props.transparent) {
    frameClasses += " bg-bg";
  }

  if (props.additionalClasses) {
    frameClasses += ` ${props.additionalClasses}`;
  }

  switch (props.titleAlignment) {
    case "center":
      titleClasses += " text-center";
      break;
    case "right":
      titleClasses += " text-right";
      break;
    case "left":
    default:
      titleClasses += " text-left";
      break;
  }

  return (
    <div className={frameClasses}>
      {props.title && <h3 className={titleClasses}>{props.title}</h3>}
      {props.children}
    </div>
  );
};