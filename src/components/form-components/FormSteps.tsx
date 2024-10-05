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
// import React from 'react';
// import { Control, FieldValues, UseFormReturn } from 'react-hook-form';
// import { TextField, FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';
// import { StepObjectType } from './step-Object';

// // Update FormData to match your actual form structure
// interface FormData {
//   firstName: string;
//   middleName: string;
//   lastName: string;
//   mobileNo: string;
//   email: string;
//   country: string;
//   isStudent: "yes" | "no";
//   password: string;
//   confirmPassword: string;
//   agreeToTerms: boolean;
//   academicInformation?: {
//     lastExaminationPassed: string;
//     percentage: number;
//     schoolCollegeLastPassed: string;
//     cityOfSchoolCollegeLastPassed: string;
//     hostelPrivateStayedLast: string;
//     currentlyEnrolledIn: string;
//     currentYearStudying: string;
//     facultyBranch: string;
//   };
//   fatherGuardianInformation?: {
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
//   additionalInformation?: {
//     jobOrBusiness: string;
//     jobType: string;
//   };
// }

// // Update ViewModel to match your actual viewModel structure
// interface ViewModel {
//   step: number;
//   setStep: React.Dispatch<React.SetStateAction<number>>;
//   form: UseFormReturn<FormData>;
//   onSubmit: (data: FormData) => void;
//   handlePrevStep: () => void;
//   handleNextStep: () => Promise<void>;
//   handleSubmit: () => Promise<void>;
//   stepObjects: StepObjectType[];
//   isSubmitted: boolean;
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
//     {/* Include other fields for Step1 */}
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
//     {/* Include other fields for Step2 */}
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
//     {/* Include other fields for Step3 */}
//   </>
// );






// final
import React from 'react';
import { Control, Controller, FieldValues, UseFormReturn } from 'react-hook-form';
import { TextField, FormControl, InputLabel, Select, MenuItem, FormHelperText, Checkbox, FormControlLabel } from '@mui/material';
import { StepObjectType } from './step-Object';

interface FormData {
  surname: string;
  name: string;
  fatherName: string;
  lastExaminationPassed: string;
  percentage: number;
  schoolCollegeLastPassed: string;
  cityOfSchoolCollegeLastPassed: string;
  hostelPrivateStayedLast: string;
  currentlyEnrolledIn: string;
  currentYearStudying: string;
  facultyBranch: string;
  fathersurname: string;
  fathername: string;
  fatherfatherName: string;
  relationshipWithParent: string;
  mobileNo: string;
  whatsappNo: string;
  emailId: string;
  annualIncome: number;
  jobOrBusiness: string ;
  jobType: string;
  nameOfJobBusiness: string;
  termsAndConditions: boolean;
}

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
      name="surname"
      control={viewModel.form.control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          label="Surname"
          error={!!error}
          helperText={error?.message}
          margin="normal"
        />
      )}
    />
    <Controller
      name="name"
      control={viewModel.form.control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          label="Name"
          error={!!error}
          helperText={error?.message}
          margin="normal"
        />
      )}
    />
    <Controller
      name="fatherName"
      control={viewModel.form.control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          label="Father's Name"
          error={!!error}
          helperText={error?.message}
          margin="normal"
        />
      )}
    />
    <Controller
      name="lastExaminationPassed"
      control={viewModel.form.control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          label="Last Examination Passed"
          error={!!error}
          helperText={error?.message}
          margin="normal"
        />
      )}
    />
    {/* <Controller
      name="percentage"
      control={viewModel.form.control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          label="Percentage"
          type="number"
          error={!!error}
          helperText={error?.message}
          margin="normal"
        />
      )}
    /> */}
    {/* working + */}
    {/* <Controller
      name="percentage"
      control={viewModel.form.control}
      defaultValue={0}
      render={({ field, fieldState: { error, isTouched } }) => (
        <TextField
          {...field}
          fullWidth
          label="Percentage"
          type="number"
          onChange={(e) => {
            let value = parseFloat(e.target.value);
            if (isNaN(value)) value = 0; // Default to 0 if value is invalid
            if (value < 0) value = 0;    // Prevent less than 0
            if (value > 100) value = 100; // Prevent more than 100
            field.onChange(value);       // Pass value to the form state
          }}
          onKeyDown={(e) => {
            if (['e', 'E', '+', '-'].includes(e.key)) {
              e.preventDefault(); // Prevent invalid keys like 'e', '+', '-'
            }
          }}
          error={  !!error}
          helperText={ error?.message}
          margin="normal"
        />
      )}
    /> */}
    {/* <Controller
      name="percentage"
      control={viewModel.form.control}
      defaultValue={0} // Default value is set here
      render={({ field, fieldState: { error, isTouched } }) => (
        <TextField
          {...field}
          fullWidth
          label="Percentage"
          placeholder="e.g., 85.5"
          type="number"
          onChange={(e) => {
            let value = e.target.value;
            // Remove leading zeros while typing
            if (value.length > 1 && value[0] === '0') {
              value = value.substring(1);
            }

            // Parse value to float, and ensure it is valid
            const floatValue = parseFloat(value);
            if (!isNaN(floatValue) && floatValue >= 0 && floatValue <= 100) {
              field.onChange(floatValue);
            } else {
              field.onChange(0); // Default to 0 if value is invalid
            }
          }}
          onKeyDown={(e) => {
            if (['e', 'E', '+', '-'].includes(e.key)) {
              e.preventDefault(); // Prevent invalid characters for number input
            }
          }}
          error={isTouched && !!error}
          helperText={isTouched && error?.message}
          margin="normal"
          value={field.value === 0 ? '' : field.value} // Handle empty state when value is 0
        />
      )}
    /> */}
    {/* working ++ */}
    {/* <Controller
      name="percentage"
      control={viewModel.form.control}
      defaultValue={0}
      rules={{ validate: value => value !== 0 || "Percentage is required" }}
      render={({ field, fieldState: { error, isTouched } }) => (
        <TextField
          {...field}
          fullWidth
          label="Percentage"
          type="number"
          placeholder="Enter percentage"
          onChange={(e) => {
            let value = e.target.value;
            if (value.length > 1 && value[0] === '0') {
              value = value.substring(1);
            }
            const floatValue = parseFloat(value);
            if (!isNaN(floatValue) && floatValue >= 0 && floatValue <= 100) {
              field.onChange(floatValue);
            } else {
              field.onChange(0);
            }
          }}
          onKeyDown={(e) => {
            if (['e', 'E', '+', '-'].includes(e.key)) {
              e.preventDefault();
            }
          }}
          error={!!error}
          helperText={error?.message}
          margin="normal"
          value={field.value === 0 ? '' : field.value}
          InputProps={{
            inputProps: {
              min: 0,
              max: 100,
              step: 0.01,
            },
          }}
        />
      )}
    /> */}
    {/* <Controller
      name="percentage"
      control={viewModel.form.control}
      defaultValue={0}
      rules={{ validate: value => value !== 0 || "Percentage is required" }}
      render={({ field, fieldState: { error, isTouched } }) => (
        <TextField
          {...field}
          fullWidth
          label="Percentage"
          type="number"
          placeholder="Enter percentage"
          onChange={(e) => {
            let value = e.target.value;
            if (value.length > 1 && value[0] === '0') {
              value = value.substring(1);
            }
            const floatValue = parseFloat(value);
            if (!isNaN(floatValue) && floatValue >= 0 && floatValue <= 100) {
              field.onChange(floatValue);
            } else {
              field.onChange(0);
            }
          }}
          onKeyDown={(e) => {
            if (['e', 'E', '+', '-'].includes(e.key)) {
              e.preventDefault();
            }
          }}
          error={!!error}
          helperText={error?.message}
          margin="normal"
          value={field.value === 0 ? '' : field.value}
          inputProps={{
            min: 0,
            max: 100,
            step: 0.01,
          }}
        />
      )}
    /> */}
    {/* <Controller
      name="percentage"
      control={viewModel.form.control}
      defaultValue={0}
      rules={{ validate: value => value !== 0 || "Percentage is required" }}
      render={({ field, fieldState: { error, isTouched } }) => (
        <TextField
          {...field}
          fullWidth
          label="Percentage"
          type="number"
          placeholder="Enter percentage"
          onChange={(e) => {
            let value = e.target.value;
            if (value.length > 1 && value[0] === '0') {
              value = value.substring(1);
            }
            const floatValue = parseFloat(value);
            if (!isNaN(floatValue) && floatValue >= 0 && floatValue <= 100) {
              field.onChange(floatValue);
            } else {
              field.onChange(0);
            }
          }}
          onKeyDown={(e) => {
            if (['e', 'E', '+', '-'].includes(e.key)) {
              e.preventDefault();
            }
          }}
          error={!!error}
          helperText={error?.message}
          margin="normal"
          value={field.value === 0 ? '' : field.value}
          slotProps={{
            input: {
              min: 0,
              max: 100,
              step: 0.01,
            },
          }}
        />
      )}
    /> */}
    {/* <Controller
      name="percentage"
      control={viewModel.form.control}
      defaultValue={0}
      rules={{ validate: value => value !== 0 || "Percentage is required" }}
      render={({ field, fieldState: { error, isTouched } }) => (
        <TextField
          {...field}
          fullWidth
          label="Percentage"
          type="number"
          placeholder="Enter percentage"
          onChange={(e) => {
            let value = e.target.value;
            if (value.length > 1 && value[0] === '0') {
              value = value.substring(1);
            }
            const floatValue = parseFloat(value);
            if (!isNaN(floatValue) && floatValue >= 0 && floatValue <= 100) {
              field.onChange(floatValue);
            } else {
              field.onChange(0);
            }
          }}
          onKeyDown={(e) => {
            if (['e', 'E', '+', '-'].includes(e.key)) {
              e.preventDefault();
            }
          }}
          error={!!error}
          helperText={error?.message}
          margin="normal"
          value={field.value === 0 ? '' : field.value}
          slotProps={{
            input: {
              inputProps: {
                min: 0,
                max: 100,
                step: 0.01,
              },
            },
          }}
        />
      )}
    /> */}
    <Controller
      name="percentage"
      control={viewModel.form.control}
      defaultValue={0}
      rules={{
        validate: (value) => {
          if (value === 0) return "Percentage is required";
          if (value < 0.01) return "Percentage must be greater than 0";
          if (value > 100) return "Percentage must be 100 or less";
          return true;
        }
      }}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          label="Percentage"
          type="number"
          placeholder="Enter percentage"
          onChange={(e) => {
            let value = e.target.value;
            if (value.length > 1 && value[0] === '0') {
              value = value.substring(1);
            }
            const floatValue = parseFloat(value);
            if (!isNaN(floatValue) && floatValue >= 0 && floatValue <= 100) {
              field.onChange(floatValue);
            } else {
              field.onChange(0);
            }
          }}
          onKeyDown={(e) => {
            if (['e', 'E', '+', '-'].includes(e.key)) {
              e.preventDefault();
            }
          }}
          error={!!error}
          helperText={error?.message}
          margin="normal"
          value={field.value === 0 ? '' : field.value}
          slotProps={{
            input: {
              inputProps: {
                min: 0,
                max: 100,
                step: 0.01,
              },
            },
          }}
        />
      )}
    />

    
    <Controller
      name="schoolCollegeLastPassed"
      control={viewModel.form.control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          label="School/College Last Passed"
          error={!!error}
          helperText={error?.message}
          margin="normal"
        />
      )}
    />
    <Controller
      name="cityOfSchoolCollegeLastPassed"
      control={viewModel.form.control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          label="City of School/College Last Passed"
          error={!!error}
          helperText={error?.message}
          margin="normal"
        />
      )}
    />
    <Controller
      name="hostelPrivateStayedLast"
      control={viewModel.form.control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          label="Hostel/Private Stayed Last"
          error={!!error}
          helperText={error?.message}
          margin="normal"
        />
      )}
    />
    <Controller
      name="currentlyEnrolledIn"
      control={viewModel.form.control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          label="Currently Enrolled In"
          error={!!error}
          helperText={error?.message}
          margin="normal"
        />
      )}
    />
    <Controller
      name="currentYearStudying"
      control={viewModel.form.control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          label="Current Year Studying"
          error={!!error}
          helperText={error?.message}
          margin="normal"
        />
      )}
    />
    <Controller
      name="facultyBranch"
      control={viewModel.form.control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          label="Faculty/Branch"
          error={!!error}
          helperText={error?.message}
          margin="normal"
        />
      )}
    />
  </>
);

export const Step2: React.FC<{ viewModel: ViewModel }> = ({ viewModel }) => (
  <>
    <Controller
      name="fathersurname"
      control={viewModel.form.control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          label="Father's Surname"
          error={!!error}
          helperText={error?.message}
          margin="normal"
        />
      )}
    />
    <Controller
      name="fathername"
      control={viewModel.form.control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          label="Father's Name"
          error={!!error}
          helperText={error?.message}
          margin="normal"
        />
      )}
    />
    <Controller
      name="fatherfatherName"
      control={viewModel.form.control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          label="Father's Father Name"
          error={!!error}
          helperText={error?.message}
          margin="normal"
        />
      )}
    />
    <Controller
      name="relationshipWithParent"
      control={viewModel.form.control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          label="Relationship with Parent"
          error={!!error}
          helperText={error?.message}
          margin="normal"
        />
      )}
    />
    <Controller
      name="mobileNo"
      control={viewModel.form.control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          label="Mobile No."
          error={!!error}
          helperText={error?.message}
          margin="normal"
        />
      )}
    />
    <Controller
      name="whatsappNo"
      control={viewModel.form.control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          label="WhatsApp No."
          error={!!error}
          helperText={error?.message}
          margin="normal"
        />
      )}
    />
    <Controller
      name="emailId"
      control={viewModel.form.control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          label="Email ID"
          error={!!error}
          helperText={error?.message}
          margin="normal"
        />
      )}
    />
    {/* <Controller
      name="annualIncome"
      control={viewModel.form.control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          label="Annual Income"
          type="number"
          error={!!error}
          helperText={error?.message}
          margin="normal"
        />
      )}
    /> */}
    <Controller
      name="annualIncome"
      control={viewModel.form.control}
      render={({ field, fieldState: { error, isTouched } }) => (
        <TextField
          {...field}
          fullWidth
          label="Annual Income"
          type="number"
          inputProps={{
            min: 0,
            step: 1,
            onKeyDown: (e) => {
              if (e.key === 'e') {
                e.preventDefault();
              }
            },
          }}
          onChange={(e) => {
            const value = e.target.value === '' ? 0 : parseFloat(e.target.value);
            field.onChange(value);
          }}
          error={!!error}
          helperText={error?.message}
          margin="normal"
        />
      )}
    />

    <Controller
      name="jobOrBusiness"
      control={viewModel.form.control}
      render={({ field, fieldState: { error } }) => (
        <FormControl fullWidth margin="normal" error={!!error}>
          <InputLabel>Job or Business</InputLabel>
          <Select {...field} label="Job or Business">
            <MenuItem value="Job">Job</MenuItem>
            <MenuItem value="Business">Business</MenuItem>
          </Select>
          {error && <FormHelperText>{error.message}</FormHelperText>}
        </FormControl>
      )}
    />
    <Controller
      name="jobType"
      control={viewModel.form.control}
      render={({ field, fieldState: { error } }) => (
        <FormControl fullWidth margin="normal" error={!!error}>
          <InputLabel>Job Type</InputLabel>
          <Select {...field} label="Job Type">
            <MenuItem value="Private">Private</MenuItem>
            <MenuItem value="Government">Government</MenuItem>
          </Select>
          {error && <FormHelperText>{error.message}</FormHelperText>}
        </FormControl>
      )}
    />
    <Controller
      name="nameOfJobBusiness"
      control={viewModel.form.control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          label="Name of Job/Business"
          error={!!error}
          helperText={error?.message}
          margin="normal"
        />
      )}
    />
  </>
);

export const Step3: React.FC<{ viewModel: ViewModel }> = ({ viewModel }) => (
  <>
    <Controller
      name="jobOrBusiness"
      control={viewModel.form.control}
      render={({ field, fieldState: { error } }) => (
        <FormControl fullWidth margin="normal" error={!!error}>
          <InputLabel>Job or Business</InputLabel>
          <Select {...field} label="Job or Business">
            <MenuItem value="Job">Job</MenuItem>
            <MenuItem value="Business">Business</MenuItem>
          </Select>
          {error && <FormHelperText>{error.message}</FormHelperText>}
        </FormControl>
      )}
    />
    <Controller
      name="jobType"
      control={viewModel.form.control}
      render={({ field, fieldState: { error } }) => (
        <FormControl fullWidth margin="normal" error={!!error}>
          <InputLabel>Job Type</InputLabel>
          <Select {...field} label="Job Type">
            <MenuItem value="Private">Private</MenuItem>
            <MenuItem value="Government">Government</MenuItem>
          </Select>
          {error && <FormHelperText>{error.message}</FormHelperText>}
        </FormControl>
      )}
    />
  </>
);

export const Step4: React.FC<{ viewModel: ViewModel }> = ({ viewModel }) => (
  <Controller
    name="termsAndConditions"
    control={viewModel.form.control}
    render={({ field, fieldState: { error } }) => (
      <FormControl fullWidth margin="normal" error={!!error}>
        <FormControlLabel
          control={<Checkbox {...field} />}
          label="I agree to the terms and conditions"
        />
        {error && <FormHelperText>{error.message}</FormHelperText>}
      </FormControl>
    )}
  />
);