export default function LlmEvaluationPage() {
  return (
    <div className="w-full h-screen">
      <iframe
        src="/LLM Agent Evaluation Report.pdf"
        className="h-screen w-full"
        title="LLM Agent Evaluation Report"
      />
    </div>
  );
}
