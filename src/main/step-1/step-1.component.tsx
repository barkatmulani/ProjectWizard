import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { setStepDetails } from '../redux/main.slice';
import { selectStep1 } from '../redux/main.selectors';
import './step-1.styles.scss';

const Step1 : React.FC = (props: any) => {
    const { register, handleSubmit, getValues } = useForm();

    const next = () => {
        props.setStepDetails({step: 1, data: getValues() });
        props.history.push('step-2');
    };

    return (
        <>
            <h3 className="heading">Step 1</h3>

            <div className="form-group">

                <form className="row" onSubmit={handleSubmit(() => next())}>

                    <div className="form-group col-12">
                        <label htmlFor=''>Project Name</label>
                        <input name="projectName" placeholder="Project Name" className="form-control" defaultValue={props.projectName} ref={register} />
                    </div>

                    <div className="form-group col-12">
                        <label htmlFor='siteAddress'>Site Address</label>
                        <input name="siteAddress" className="form-control" placeholder="Site Address" defaultValue={props.siteAddress} ref={register} />
                    </div>

                    <div className="form-group col-12">
                        <label htmlFor='userDetails'>User Details</label>
                        <input name="userDetails" className="form-control" placeholder="User Details" defaultValue={props.userDetails} ref={register} />
                    </div>

                    <div className="panel">
                        <button disabled className="btn btn-primary">Prev</button>
                        <button className="btn btn-primary" onClick={next}>Next</button>
                    </div>
                </form>
            </div>
        </>
    );
};

const mapStateToProps = (state: any) => {
    const { projectName, siteAddress, userDetails } = selectStep1(state);
    return { projectName, siteAddress, userDetails };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        setStepDetails: (payload: any) => dispatch(setStepDetails(payload))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Step1);
