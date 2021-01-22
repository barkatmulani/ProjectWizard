import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Step1 from './step-1/step-1.component';
import Step2 from './step-2/step-2.component';
import Step3 from './step-3/step-3.component';
import Step4 from './step-4/step-4.component';

const MainRouter: React.FC = () => {
    return (
        <div>
            <Router>
                <div>
                    <Switch>
                        <Route path="/" exact>
                            <Redirect to="/step-1" />
                        </Route>
                        <Route path="/step-1" component={Step1} />
                        <Route path="/step-2" component={Step2} />
                        <Route path="/step-3" component={Step3} />
                        <Route path="/step-4" component={Step4} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default MainRouter;