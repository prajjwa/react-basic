

function InputComponent({ inputValues, setValues }) {

    const labels = ['Initial Investment', 'Annual Investment', 'Expected Return', 'Duration'];

    function handelChange(changedValue, label) {
        setValues((prev) => (
            {
                ...prev,
                [label]: Number(changedValue)
            }
        ));
    }

    return (

        <div id="user-input">
            <div className='input-group'>
                {
                    labels.map(label => (
                        <div >
                            <label htmlFor="">{label}</label>
                            <input type='number' value={inputValues[label]} onChange={(event) => handelChange(event.target.value, label)} />
                        </div>
                    ))
                }

            </div>
        </div>

    );
}

export default InputComponent;