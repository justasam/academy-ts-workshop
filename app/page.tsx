export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-lg font-bold">Trivia Quiz</h1>
      <p className="text-slate-300">Welcome to the Trivia Quiz!</p>
      <hr className="my-2 h-0.5 border-t-0 bg-white/10" />
      <p>Start by doing task 1: </p>
      <code className="text-yellow-300">app/types/dtos/trivia-question.ts</code>
      <p>
        Change the <b>type</b> of the &quot;type&quot; and
        &quot;difficulty&quot; properties to an enums.
      </p>
      <p className="py-2">
        Example of <b>enum</b> can be found in&nbsp;
        <span className="font-mono text-yellow-300">
          constants/response.ts
        </span>{" "}
        and&nbsp;
        <span className="font-mono text-yellow-300">api/response.ts</span>.
      </p>
      <p className="pt-2">After you are done, checkout the next branch:</p>
      <code className="text-teal-300">git checkout task2</code>
    </main>
  );
}
