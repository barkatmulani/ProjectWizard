import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IStep1 {
    projectName: string;
    siteAddress: string;
    userDetails: string;
};

export interface IStep2 {
    projectOptions1: string[];
    projectOptions2: string[];
    completionStatus: number;
};

export interface IStep3 {
    projectInfo: string;
    userComments: string;
}

export interface IStep4 {
  confirmation: boolean;
}

export interface IProjectWizard {
    step1: IStep1,
    step2: IStep2,
    step3: IStep3,
    step4: IStep4,
    lastStep: number
}

const initialState: IProjectWizard = {
    step1: {
      projectName: '',
      siteAddress: '',
      userDetails: '',
    },
    step2: {
      projectOptions1: [],
      projectOptions2: [],
      completionStatus: 0
    },
    step3: {
      projectInfo: '',
      userComments: ''
    },
    step4: {
      confirmation: false
    },
    lastStep: 1
}

const mainSlice = createSlice({
  name: 'mainSlice',
  initialState,
  reducers: {
      setStepDetails(state: IProjectWizard, action: PayloadAction<any>) {
          const { step, data } = action.payload;

          switch (step) {
            case 1: state.step1 = data; break;
            case 2: state.step2 = data; break;
            case 3: state.step3 = data; break;
            case 4: state.step4 = data; break;
          }

          state.lastStep = step;
      }
  }
})

export const { setStepDetails } = mainSlice.actions;

export default mainSlice.reducer;
