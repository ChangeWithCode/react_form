const Buttons = ({HandleSubmit}) => {
  return (
    <button
      type="submit"
      onClick={HandleSubmit}
      className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
    >
      Sign in
    </button>
  );
};

export default Buttons;
