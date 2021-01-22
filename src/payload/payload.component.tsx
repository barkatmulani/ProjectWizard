import { connect } from "react-redux";
import { selectSteps } from "../main/redux/main.selectors";
import { IProjectWizard } from "../main/redux/main.slice";
import './payload.styles.scss';

const Payload : React.FC = (props: any) => {
    return (
        <>
            <h5>Payload</h5>
            <div><pre>{JSON.stringify(props.steps, null, 2) }</pre></div>
        </>
    );
};

const mapStateToProps = (state: IProjectWizard) => {
    return {
        steps: selectSteps(state)
    }
}

export default connect(mapStateToProps)(Payload);