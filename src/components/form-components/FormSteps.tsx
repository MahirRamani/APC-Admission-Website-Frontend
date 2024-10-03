// import React from 'react';
// import { Controller, Control, FieldValues } from 'react-hook-form';
// import { TextField, FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';

// // Define the structure of your form data
// interface FormData {
//   academicInformation: {
//     lastExaminationPassed: string;
//     percentage: number;
//     schoolCollegeLastPassed: string;
//     cityOfSchoolCollegeLastPassed: string;
//     hostelPrivateStayedLast: string;
//     currentlyEnrolledIn: string;
//     currentYearStudying: string;
//     facultyBranch: string;
//   };
//   fatherGuardianInformation: {
//     fatherFullName: {
//       surname: string;
//       name: string;
//       fatherName: string;
//     };
//     relationshipWithParent: string;
//     mobileNo: string;
//     whatsappNo: string;
//     emailId: string;
//     annualIncome: number;
//     jobOrBusiness: string;
//     jobType: string;
//     nameOfJobBusiness: string;
//   };
//   additionalInformation: {
//     jobOrBusiness: string;
//     jobType: string;
//   };
// }

// // Define the structure of your viewModel
// interface ViewModel {
//   form: {
//     control: Control<FormData>;
//   };
// }

// export const Step1: React.FC<{ viewModel: ViewModel }> = ({ viewModel }) => (
//   <>
//     <Controller
//       name="academicInformation.lastExaminationPassed"
//       control={viewModel.form.control}
//       render={({ field: { onChange, value }, fieldState: { error } }) => (
//         <TextField
//           fullWidth
//           label="Last Examination Passed"
//           placeholder="e.g., 12th Standard"
//           value={value}
//           onChange={onChange}
//           error={!!error}
//           helperText={error?.message}
//           margin="normal"
//         />
//       )}
//     />
//     <Controller
//       name="academicInformation.percentage"
//       control={viewModel.form.control}
//       render={({ field: { onChange, value }, fieldState: { error } }) => (
//         <TextField
//           fullWidth
//           label="Percentage"
//           placeholder="e.g., 85.5"
//           value={value}
//           onChange={onChange}
//           error={!!error}
//           helperText={error?.message}
//           margin="normal"
//           type="number"
//         />
//       )}
//     />
//     <Controller
//       name="academicInformation.schoolCollegeLastPassed"
//       control={viewModel.form.control}
//       render={({ field: { onChange, value }, fieldState: { error } }) => (
//         <TextField
//           fullWidth
//           label="School/College Last Passed"
//           placeholder="e.g., XYZ High School"
//           value={value}
//           onChange={onChange}
//           error={!!error}
//           helperText={error?.message}
//           margin="normal"
//         />
//       )}
//     />
//     <Controller
//       name="academicInformation.cityOfSchoolCollegeLastPassed"
//       control={viewModel.form.control}
//       render={({ field: { onChange, value }, fieldState: { error } }) => (
//         <TextField
//           fullWidth
//           label="City of School/College Last Passed"
//           placeholder="e.g., Mumbai"
//           value={value}
//           onChange={onChange}
//           error={!!error}
//           helperText={error?.message}
//           margin="normal"
//         />
//       )}
//     />
//     <Controller
//       name="academicInformation.hostelPrivateStayedLast"
//       control={viewModel.form.control}
//       render={({ field: { onChange, value }, fieldState: { error } }) => (
//         <TextField
//           fullWidth
//           label="Hostel/Private Stayed Last"
//           placeholder="e.g., Private"
//           value={value}
//           onChange={onChange}
//           error={!!error}
//           helperText={error?.message}
//           margin="normal"
//         />
//       )}
//     />
//     <Controller
//       name="academicInformation.currentlyEnrolledIn"
//       control={viewModel.form.control}
//       render={({ field: { onChange, value }, fieldState: { error } }) => (
//         <TextField
//           fullWidth
//           label="Currently Enrolled In"
//           placeholder="e.g., Bachelor's Degree"
//           value={value}
//           onChange={onChange}
//           error={!!error}
//           helperText={error?.message}
//           margin="normal"
//         />
//       )}
//     />
//     <Controller
//       name="academicInformation.currentYearStudying"
//       control={viewModel.form.control}
//       render={({ field: { onChange, value }, fieldState: { error } }) => (
//         <TextField
//           fullWidth
//           label="Current Year Studying"
//           placeholder="e.g., 2nd Year"
//           value={value}
//           onChange={onChange}
//           error={!!error}
//           helperText={error?.message}
//           margin="normal"
//         />
//       )}
//     />
//     <Controller
//       name="academicInformation.facultyBranch"
//       control={viewModel.form.control}
//       render={({ field: { onChange, value }, fieldState: { error } }) => (
//         <TextField
//           fullWidth
//           label="Faculty/Branch"
//           placeholder="e.g., Computer Science"
//           value={value}
//           onChange={onChange}
//           error={!!error}
//           helperText={error?.message}
//           margin="normal"
//         />
//       )}
//     />
//   </>
// );

// export const Step2: React.FC<{ viewModel: ViewModel }> = ({ viewModel }) => (
//   <>
//     <Controller
//       name="fatherGuardianInformation.fatherFullName.surname"
//       control={viewModel.form.control}
//       render={({ field: { onChange, value }, fieldState: { error } }) => (
//         <TextField
//           fullWidth
//           label="Father's Surname"
//           placeholder="e.g., Smith"
//           value={value}
//           onChange={onChange}
//           error={!!error}
//           helperText={error?.message}
//           margin="normal"
//         />
//       )}
//     />
//     <Controller
//       name="fatherGuardianInformation.fatherFullName.name"
//       control={viewModel.form.control}
//       render={({ field: { onChange, value }, fieldState: { error } }) => (
//         <TextField
//           fullWidth
//           label="Father's Name"
//           placeholder="e.g., John"
//           value={value}
//           onChange={onChange}
//           error={!!error}
//           helperText={error?.message}
//           margin="normal"
//         />
//       )}
//     />
//     <Controller
//       name="fatherGuardianInformation.fatherFullName.fatherName"
//       control={viewModel.form.control}
//       render={({ field: { onChange, value }, fieldState: { error } }) => (
//         <TextField
//           fullWidth
//           label="Father's Father Name"
//           placeholder="e.g., Michael"
//           value={value}
//           onChange={onChange}
//           error={!!error}
//           helperText={error?.message}
//           margin="normal"
//         />
//       )}
//     />
//     <Controller
//       name="fatherGuardianInformation.relationshipWithParent"
//       control={viewModel.form.control}
//       render={({ field: { onChange, value }, fieldState: { error } }) => (
//         <TextField
//           fullWidth
//           label="Relationship with Parent"
//           placeholder="e.g., Father"
//           value={value}
//           onChange={onChange}
//           error={!!error}
//           helperText={error?.message}
//           margin="normal"
//         />
//       )}
//     />
//     <Controller
//       name="fatherGuardianInformation.mobileNo"
//       control={viewModel.form.control}
//       render={({ field: { onChange, value }, fieldState: { error } }) => (
//         <TextField
//           fullWidth
//           label="Mobile No."
//           placeholder="e.g., 1234567890"
//           value={value}
//           onChange={onChange}
//           error={!!error}
//           helperText={error?.message}
//           margin="normal"
//         />
//       )}
//     />
//     <Controller
//       name="fatherGuardianInformation.whatsappNo"
//       control={viewModel.form.control}
//       render={({ field: { onChange, value }, fieldState: { error } }) => (
//         <TextField
//           fullWidth
//           label="WhatsApp No."
//           placeholder="e.g., 1234567890"
//           value={value}
//           onChange={onChange}
//           error={!!error}
//           helperText={error?.message}
//           margin="normal"
//         />
//       )}
//     />
//     <Controller
//       name="fatherGuardianInformation.emailId"
//       control={viewModel.form.control}
//       render={({ field: { onChange, value }, fieldState: { error } }) => (
//         <TextField
//           fullWidth
//           label="Email ID"
//           placeholder="e.g., john@example.com"
//           value={value}
//           onChange={onChange}
//           error={!!error}
//           helperText={error?.message}
//           margin="normal"
//         />
//       )}
//     />
//     <Controller
//       name="fatherGuardianInformation.annualIncome"
//       control={viewModel.form.control}
//       render={({ field: { onChange, value }, fieldState: { error } }) => (
//         <TextField
//           fullWidth
//           label="Annual Income"
//           placeholder="e.g., 50000"
//           value={value}
//           onChange={onChange}
//           error={!!error}
//           helperText={error?.message}
//           margin="normal"
//           type="number"
//         />
//       )}
//     />
//     <Controller
//       name="fatherGuardianInformation.jobOrBusiness"
//       control={viewModel.form.control}
//       render={({ field: { onChange, value }, fieldState: { error } }) => (
//         <FormControl fullWidth margin="normal" error={!!error}>
//           <InputLabel>Job or Business</InputLabel>
//           <Select
//             value={value}
//             onChange={onChange}
//             label="Job or Business"
//           >
//             <MenuItem value="Job">Job</MenuItem>
//             <MenuItem value="Business">Business</MenuItem>
//           </Select>
//           {error && <FormHelperText>{error.message}</FormHelperText>}
//         </FormControl>
//       )}
//     />
//     <Controller
//       name="fatherGuardianInformation.jobType"
//       control={viewModel.form.control}
//       render={({ field: { onChange, value }, fieldState: { error } }) => (
//         <FormControl fullWidth margin="normal" error={!!error}>
//           <InputLabel>Job Type</InputLabel>
//           <Select
//             value={value}
//             onChange={onChange}
//             label="Job Type"
//           >
//             <MenuItem value="Private">Private</MenuItem>
//             <MenuItem value="Government">Government</MenuItem>
//           </Select>
//           {error && <FormHelperText>{error.message}</FormHelperText>}
//         </FormControl>
//       )}
//     />
//     <Controller
//       name="fatherGuardianInformation.nameOfJobBusiness"
//       control={viewModel.form.control}
//       render={({ field: { onChange, value }, fieldState: { error } }) => (
//         <TextField
//           fullWidth
//           label="Name of Job/Business"
//           placeholder="e.g., ABC Company"
//           value={value}
//           onChange={onChange}
//           error={!!error}
//           helperText={error?.message}
//           margin="normal"
//         />
//       )}
//     />
//   </>
// );

// export const Step3: React.FC<{ viewModel: ViewModel }> = ({ viewModel }) => (
//   <>
//     <Controller
//       name="additionalInformation.jobOrBusiness"
//       control={viewModel.form.control}
//       render={({ field: { onChange, value }, fieldState: { error } }) => (
//         <FormControl fullWidth margin="normal" error={!!error}>
//           <InputLabel>Job or Business</InputLabel>
//           <Select
//             value={value}
//             onChange={onChange}
//             label="Job or Business"
//           >
//             <MenuItem value="Job">Job</MenuItem>
//             <MenuItem value="Business">Business</MenuItem>
//           </Select>
//           {error && <FormHelperText>{error.message}</FormHelperText>}
//         </FormControl>
//       )}
//     />
//     <Controller
//       name="additionalInformation.jobType"
//       control={viewModel.form.control}
//       render={({ field: { onChange, value }, fieldState: { error } }) => (
//         <FormControl fullWidth margin="normal" error={!!error}>
//           <InputLabel>Job Type</InputLabel>
//           <Select
//             value={value}
//             onChange={onChange}
//             label="Job Type"
//           >
//             <MenuItem value="Private">Private</MenuItem>
//             <MenuItem value="Government">Government</MenuItem>
//           </Select>
//           {error && <FormHelperText>{error.message}</FormHelperText>}
//         </FormControl>
//       )}
//     />
//   </>
// );






// x1
import React from 'react';
import { Control, Controller, FieldValues, UseFormReturn } from 'react-hook-form';
import { TextField, FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';
import { StepObjectType } from './step-Object';

// Update FormData to match your actual form structure
interface FormData {
  firstName: string;
  middleName: string;
  lastName: string;
  mobileNo: string;
  email: string;
  country: string;
  isStudent: "yes" | "no";
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
  academicInformation?: {
    lastExaminationPassed: string;
    percentage: number;
    schoolCollegeLastPassed: string;
    cityOfSchoolCollegeLastPassed: string;
    hostelPrivateStayedLast: string;
    currentlyEnrolledIn: string;
    currentYearStudying: string;
    facultyBranch: string;
  };
  fatherGuardianInformation?: {
    fatherFullName: {
      surname: string;
      name: string;
      fatherName: string;
    };
    relationshipWithParent: string;
    mobileNo: string;
    whatsappNo: string;
    emailId: string;
    annualIncome: number;
    jobOrBusiness: string;
    jobType: string;
    nameOfJobBusiness: string;
  };
  additionalInformation?: {
    jobOrBusiness: string;
    jobType: string;
  };
}

// Update ViewModel to match your actual viewModel structure
interface ViewModel {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  form: UseFormReturn<FormData>;
  onSubmit: (data: FormData) => void;
  handlePrevStep: () => void;
  handleNextStep: () => Promise<void>;
  handleSubmit: () => Promise<void>;
  stepObjects: StepObjectType[];
  isSubmitted: boolean;
}

export const Step1: React.FC<{ viewModel: ViewModel }> = ({ viewModel }) => (
  <>
    <Controller
      name="academicInformation.lastExaminationPassed"
      control={viewModel.form.control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          fullWidth
          label="Last Examination Passed"
          placeholder="e.g., 12th Standard"
          value={value}
          onChange={onChange}
          error={!!error}
          helperText={error?.message}
          margin="normal"
        />
      )}
    />
    {/* Include other fields for Step1 */}
  </>
);

export const Step2: React.FC<{ viewModel: ViewModel }> = ({ viewModel }) => (
  <>
    <Controller
      name="fatherGuardianInformation.fatherFullName.surname"
      control={viewModel.form.control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          fullWidth
          label="Father's Surname"
          placeholder="e.g., Smith"
          value={value}
          onChange={onChange}
          error={!!error}
          helperText={error?.message}
          margin="normal"
        />
      )}
    />
    {/* Include other fields for Step2 */}
  </>
);

export const Step3: React.FC<{ viewModel: ViewModel }> = ({ viewModel }) => (
  <>
    <Controller
      name="additionalInformation.jobOrBusiness"
      control={viewModel.form.control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormControl fullWidth margin="normal" error={!!error}>
          <InputLabel>Job or Business</InputLabel>
          <Select
            value={value}
            onChange={onChange}
            label="Job or Business"
          >
            <MenuItem value="Job">Job</MenuItem>
            <MenuItem value="Business">Business</MenuItem>
          </Select>
          {error && <FormHelperText>{error.message}</FormHelperText>}
        </FormControl>
      )}
    />
    {/* Include other fields for Step3 */}
  </>
);