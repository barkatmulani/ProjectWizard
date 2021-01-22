import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { setStepDetails } from '../redux/main.slice';
import { selectStep2 } from '../redux/main.selectors';
import './step-2.styles.scss';

const Step2 : React.FC = (props: any) => {
    const { register, handleSubmit, getValues } = useForm();

    const prev = () => {
        props.setStepDetails({step: 2, data: getValues() });
        props.history.push('step-1');
    };

    const next = () => {
        props.setStepDetails({step: 2, data: getValues() });
        props.history.push('step-3');
    };

    return (
        <>
            <h3 className="heading">Step 2</h3>

            <div className="form-group">

                <form className="row" onSubmit={handleSubmit(() => next())}>

                    <div className="form-group col-12">
                        <label htmlFor=''>Project Options 1</label>
                        <select name="projectOptions1" className="form-control" defaultValue={props.projectOptions1} ref={register}>
                            <option value="option 1-1">Opitons 1-1</option>
                            <option value="option 1-2">Opitons 1-2</option>
                            <option value="option 1-3">Opitons 1-3</option>
                        </select>
                    </div>

                    <div className="form-group col-12">
                        <label htmlFor='siteAddress'>Project Options 2</label>
                        <select name="projectOptions2" className="form-control" defaultValue={props.projectOptions2} ref={register}>
                            <option value="option 2-1">Opitons 2-1</option>
                            <option value="option 2-2">Opitons 2-2</option>
                            <option value="option 2-3">Opitons 2-3</option>
                        </select>
                    </div>

                    <div className="form-group col-12">
                        <label htmlFor='completionStatus'>Current Completion Status</label>
                        <input name="completionStatus" className="form-control" type="range" min="0" max="100" defaultValue={props.completionStatus} ref={register} step="1"/>
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
    const { projectOptions1, projectOptions2, completionStatus } = selectStep2(state);
    return { projectOptions1, projectOptions2, completionStatus };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        setStepDetails: (payload: any) => dispatch(setStepDetails(payload))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Step2);
