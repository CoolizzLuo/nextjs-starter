import SelectDemo from './SelectDemo';

const Page = () => {
  return (
    <div className="m-auto flex h-screen w-[720px] flex-col justify-start pt-4">
      <h2>Demo Page</h2>
      <p>This is a demo page.</p>
      <p>It can be used to showcase various components or features.</p>

      <SelectDemo />
    </div>
  );
};

export default Page;
