function selectAllTextInElement(el: HTMLElement) {
  var range = document.createRange();
  range.selectNodeContents(el);
  var sel = window.getSelection();
  sel?.removeAllRanges();
  sel?.addRange(range);
}

export default function QuestionTextWrapperComponent({
  index,
  content,
  editMode,
  titleRef,
  descriptionRef,
}: {
  index: number;
  content: {
    title: string;
    description: string;
  };
  editMode: boolean;
  titleRef: React.RefObject<HTMLSpanElement>;
  descriptionRef: React.RefObject<HTMLSpanElement>;
}) {
  return (
    <div className="flex-auto flex flex-col justify-center p-6">
      {index > 0 && (
        <span className="uppercase text-sm font-bold text-gray-500 mb-2 antialiased">
          question #{index}
        </span>
      )}
      {index === 0 && (
        <span className="uppercase text-sm font-bold text-gray-500 mb-2 antialiased">
          new question
        </span>
      )}
      <span
        id={`question-${index}-title`}
        ref={titleRef}
        contentEditable={editMode}
        suppressContentEditableWarning={true}
        onFocus={(e) => {
          editMode && selectAllTextInElement(e.target as HTMLSpanElement);
        }}
        placeholder="Add a title"
        tabIndex={0}
        className={
          !editMode
            ? `block text-3xl font-bold mb-2 antialiased`
            : `block text-3xl font-bold mb-2 antialiased p-1 bg-gray-200 border border-gray-400`
        }
      >
        {content.title}
      </span>
      <span
        id={`question-${index}-description`}
        contentEditable={editMode}
        ref={descriptionRef}
        suppressContentEditableWarning={true}
        tabIndex={0}
        placeholder="Add a description"
        onFocus={(e) => {
          editMode && selectAllTextInElement(e.target as HTMLSpanElement);
        }}
        className={
          !editMode
            ? `block text-lg mb-2 antialiased`
            : `block text-lg mb-2 antialiased p-1 bg-gray-200 border border-gray-400`
        }
      >
        {content.description}
      </span>
    </div>
  );
}
