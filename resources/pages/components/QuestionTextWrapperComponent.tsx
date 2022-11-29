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
}: {
  index: number;
  content: {
    title: string;
    description: string;
  };
  editMode: boolean;
}) {
  return (
    <div className="flex-auto flex flex-col justify-center p-6">
      <span className="uppercase text-sm font-bold text-gray-500 mb-2 antialiased">
        question #{index}
      </span>
      <span
        id={`question-${index}-title`}
        contentEditable={editMode}
        suppressContentEditableWarning={true}
        onDoubleClick={() => {
          // TODO toggle edit mode
        }}
        onFocus={(e) => {
          editMode && selectAllTextInElement(e.target as HTMLSpanElement);
        }}
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
        suppressContentEditableWarning={true}
        onDoubleClick={() => {
          // TODO toggle edit mode
        }}
        tabIndex={0}
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
