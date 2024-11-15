const FormContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="max-w-md mx-auto p-6 sm:p-8 bg-white shadow-custom rounded-lg mt-10">
      {children}
    </div>
  );
};
  
  export default FormContainer;