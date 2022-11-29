import IconComponent from './IconComponent';

export default function QuestionBtnComponent({
  iconName,
  label,
  onClick,
}: {
  iconName: string;
  label: string;
  onClick?: () => void;
}) {
  function onClickHandler() {
    if (onClick) {
      onClick();
    }
  }
  return (
    <button
      onClick={onClickHandler}
      className="md:w-32 md:h-full flex-1 transition-colors md:flex-col justify-center items-center flex border-t md:border-t-0 md:border-l border-gray-300 hover:bg-gray-900 hover:text-gray-50 p-6 "
    >
      <span className="text-2xl mr-1 md:mr-0 md:mb-1">
        <IconComponent iconName={iconName}></IconComponent>
      </span>
      <span>{label}</span>
    </button>
  );
}
