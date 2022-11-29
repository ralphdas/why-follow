import IconComponent from './IconComponent';

export default function AddQuestionBtnComponent({
  onClick,
}: {
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
      className="flex items-center justify-center p-6 flex-1 text-gray-600 border-gray-300 hover:bg-gray-900 hover:text-gray-50"
    >
      <span className="text-2xl mr-1 md:mr-0 md:mb-1">
        <IconComponent iconName="Plus"></IconComponent>
      </span>
      <span>Add Question</span>
    </button>
  );
}
