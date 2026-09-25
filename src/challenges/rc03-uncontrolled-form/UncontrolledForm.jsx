import "./UncontrolledForm.css";

const InputField = ({ inputType, defaultValue, inputName, inputLabel }) => {
  return (
    <label className="form-field">
      <span className="form-field__label">{inputLabel}</span>
      <input
        className="form-field__input"
        name={inputName}
        type={inputType}
        defaultValue={defaultValue}
      />
    </label>
  );
};

const UncontrolledForm = () => {
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    let alertText = "";

    formData.forEach(
      (value, key) => (alertText = alertText + `${key} is ${value}` + "\n"),
    );

    alert(alertText);
  };
  return (
    <div className="form-demo">
      <div className="form-card">
        <header className="form-header">
          <h3 className="form-card__title">Uncontrolled Form</h3>
          <p className="form-card__subtitle">
            Submit the form and inspect the values straight from the browser.
          </p>
        </header>

        <section className="form-section">
          <h4 className="form-section__title">User Details</h4>

          <form
            className="form"
            onSubmit={handleSubmitForm}
            aria-label="user form"
          >
            <InputField
              inputType="text"
              defaultValue="Ada Lovelace"
              inputName="name"
              inputLabel="Name"
            />
            <InputField
              inputType="email"
              defaultValue="ada@example.com"
              inputName="email"
              inputLabel="Email"
            />
            <InputField
              inputType="text"
              defaultValue="United Kingdom"
              inputName="country"
              inputLabel="Country"
            />
            <div className="form-actions">
              <button type="submit" className="form-submit-button">
                Submit
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default UncontrolledForm;
