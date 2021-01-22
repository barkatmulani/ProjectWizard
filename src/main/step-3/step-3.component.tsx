import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { setStepDetails } from '../redux/main.slice';
import { selectStep3 } from '../redux/main.selectors';
import './step-3.styles.scss';

const Step3 : React.FC = (props: any) => {
    const { register, handleSubmit, getValues } = useForm();

    const prev = () => {
        props.setStepDetails({step: 3, data: getValues() });
        props.history.push('step-2');
    };

    const next = () => {
        props.setStepDetails({step: 3, data: getValues() });
        props.history.push('step-4');
    };

    return (
        <>
            <h3 className="heading">Step 3</h3>

            <div className="form-group">

                <form className="row" onSubmit={handleSubmit(() => next())}>

                    <div className="form-group col-12">
                        <label htmlFor='projectInfo'>Project Information</label>
                        <input name="projectInfo" placeholder="Project Information" className="form-control" defaultValue={props.projectInfo} ref={register} />
                    </div>

                    <div className="form-group col-12">
                        <label htmlFor='userComments'>User Comments</label>
                        <textarea name="userComments" className="form-control" placeholder="User Comments" defaultValue={props.userComments} ref={register} />
                    </div>

                    <div className="panel">
                        <button className="btn btn-primary" onClick={prev}>Prev</button>
                        <button className="btn btn-primary" onClick={next}>Next</button>
                    </div>
                </form>
            </div>
        </>
    );
};

const mapStateToProps = (state: any) => {
    const { projectInfo, userComments } = selectStep3(state);
    return { projectInfo, userComments };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        setStepDetails: (payload: any) => dispatch(setStepDetails(payload))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Step3);
