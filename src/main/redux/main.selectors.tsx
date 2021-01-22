import { createSelector } from 'reselect';
import { RootState } from '../../redux/rootReducer';
import { IProjectWizard, IStep1 } from './main.slice';

const mainSelector = (state: RootState) => state.projectwizard;

export const selectSteps: any = createSelector(
    [mainSelector],
    (state: IProjectWizard) => ({ step1: state.step1, step2: state.step2, step3: state.step3, step4: state.step4 })
);

export const selectStep1: any = createSelector(
    [mainSelector],
    (state: IProjectWizard) => state.step1
);

export const selectStep2: any = createSelector(
    [mainSelector],
    (state: IProjectWizard) => state.step2
);

export const selectStep3: any = createSelector(
    [mainSelector],
    (state: IProjectWizard) => state.step3
);

export const selectStep4: any = createSelector(
    [mainSelector],
    (state: IProjectWizard) => state.step4
);