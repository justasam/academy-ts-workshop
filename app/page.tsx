export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-lg font-bold">Trivia Quiz</h1>
      <p className="text-slate-300">Welcome to the Trivia Quiz!</p>
      <hr className="my-2 h-0.5 border-t-0 bg-white/10" />
      <p>Task 2 time: </p>
      <code className="text-yellow-300">
        app/data/transformers/trivia-question.ts
      </code>
      <p>
        Write a transformer function for the <b>TriviaQuestionDto</b>.
        Afterwards,&nbsp;
        <code className="text-yellow-300">
          app/data/transformers/__tests__/trivia-question.test.ts
        </code>
        &nbsp; should pass.
      </p>
      <p className="pt-2">After you are done, checkout the next branch:</p>
      <code className="text-teal-300">git checkout task3</code>
    </main>
  );
}
