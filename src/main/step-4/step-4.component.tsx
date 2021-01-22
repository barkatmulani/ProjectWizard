import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { setStepDetails } from '../redux/main.slice';
import { selectStep4 } from '../redux/main.selectors';

const Step4 : React.FC = (props: any) => {
    const { register, handleSubmit } = useForm();

    const prev = () => {
        props.history.push('step-3');
    };

    const next = () => {
        props.setStepDetails({step: 4, data: { confirmation: true } });
    };

    return (
        <>
            <h3 className="heading">Step 4</h3>

            <div className="form-group">

                <form className="row" onSubmit={handleSubmit(() => next())}>

                    <div className="panel">
                        <button className="btn btn-primary" onClick={prev}>Prev</button>
                        <button type="submit" className="btn btn-primary">Confirm</button>
                    </div>

                </form>
            </div>
        </>
    );
};

const mapStateToProps = (state: any) => {
    const { confirmation } = selectStep4(state);
    return { confirmation };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        setStepDetails: (payload: any) => dispatch(setStepDetails(payload))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Step4);
