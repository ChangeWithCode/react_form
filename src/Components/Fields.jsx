const Fields = ({type , name , handleChange , value , placeholder}) => {
  return (
    <div>
      <div className="relative">
        <input
          type={type}
          name={name}
          onChange={handleChange}
          value={value}
          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Fields;
