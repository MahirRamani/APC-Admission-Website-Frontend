// 'use client'

// import {
//     TextField, FormControl, Button, Box, CardContent,
//     RadioGroup, FormControlLabel, Radio, Select, MenuItem, InputLabel,
//     FormHelperText, FormLabel, Checkbox
// } from '@mui/material';
// import { Controller } from 'react-hook-form';
// import UseMultiStepViewModel from '../../hooks/stdFormHook';
// import StepLabels from './step-Object';


// export default function Form() {

//     const viewModel = UseMultiStepViewModel();


//     return (
//         <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
//             <FormControl sx={{ border: '2px solid #ccc', padding: '16px', margin: '16px', marginTop: '32px', backgroundColor: '#fff', width: '100%', maxWidth: '576px' }}>


//                 <form {...viewModel.form} onSubmit={viewModel.form.handleSubmit(viewModel.onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

//                     <StepLabels step={viewModel.step} data={viewModel.stepObjects} />
//                     {viewModel.step === 1 && (
//                         <>
//                             <CardContent sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 4 }}>

//                                 <Controller
//                                     name="firstName"
//                                     control={viewModel.form.control}
//                                     render={({ field: { onChange, value }, fieldState: { error } }) => (
//                                         <TextField
//                                             fullWidth
//                                             label="First Name"
//                                             placeholder="Mahir"
//                                             value={value}
//                                             onChange={onChange}
//                                             error={!!error}
//                                             helperText={error?.message}
//                                         />
//                                     )}
//                                 />

//                                 <Controller
//                                     name="middleName"
//                                     control={viewModel.form.control}
//                                     render={({ field: { onChange, value }, fieldState: { error } }) => (
//                                         <TextField
//                                             fullWidth
//                                             label="Middle Name"
//                                             placeholder="M"
//                                             value={value}
//                                             onChange={onChange}
//                                             error={!!error}
//                                             helperText={error?.message}
//                                         />
//                                     )}
//                                 />

//                                 <Controller
//                                     name="lastName"
//                                     control={viewModel.form.control}
//                                     render={({ field: { onChange, value }, fieldState: { error } }) => (
//                                         <TextField
//                                             fullWidth
//                                             label="Last Name"
//                                             placeholder="Ramani"
//                                             value={value}
//                                             onChange={onChange}
//                                             error={!!error}
//                                             helperText={error?.message}
//                                         />
//                                     )}
//                                 />

//                             </CardContent>

//                             <Controller
//                                 name="mobileNo"
//                                 control={viewModel.form.control}
//                                 render={({ field, fieldState: { error } }) => (
//                                     <TextField
//                                         {...field}
//                                         fullWidth
//                                         label="Mobile No."
//                                         placeholder="123-456-7890"
//                                         error={!!error}
//                                         helperText={error?.message}
//                                     />
//                                 )}
//                             />

//                             <Controller
//                                 name="email"
//                                 control={viewModel.form.control}
//                                 render={({ field, fieldState: { error } }) => (
//                                     <TextField
//                                         {...field}
//                                         fullWidth
//                                         label="Email"
//                                         placeholder="example@example.com"
//                                         error={!!error}
//                                         helperText={error?.message}
//                                     />
//                                 )}
//                             />
//                         </>
//                     )}

//                     {viewModel.step === 2 && (
//                         <>

//                             <Controller
//                                 name="country"
//                                 control={viewModel.form.control}
//                                 render={({ field }) => (
//                                     <FormControl fullWidth error={!!viewModel.form.formState.errors.country}>
//                                         <InputLabel id="country-label">Country</InputLabel>
//                                         <Select
//                                             {...field}
//                                             labelId="country-label"
//                                             label="Country"
//                                         >
//                                             <MenuItem value="">Select a country</MenuItem>
//                                             <MenuItem value="us">United States</MenuItem>
//                                             <MenuItem value="uk">United Kingdom</MenuItem>
//                                             <MenuItem value="ca">Canada</MenuItem>
//                                             <MenuItem value="au">Australia</MenuItem>
//                                         </Select>
//                                         <FormHelperText error>{viewModel.form.formState.errors.country?.message}</FormHelperText>
//                                     </FormControl>
//                                 )}
//                             />

//                             <Controller
//                                 name="isStudent"
//                                 control={viewModel.form.control}
//                                 render={({ field }) => (
//                                     <FormControl component="fieldset" error={!!viewModel.form.formState.errors.isStudent}>
//                                         <FormLabel component="legend">Are you a student?</FormLabel>
//                                         <RadioGroup row {...field}>
//                                             <FormControlLabel value="yes" control={<Radio />} label="Yes" />
//                                             <FormControlLabel value="no" control={<Radio />} label="No" />
//                                         </RadioGroup>
//                                         <FormHelperText error>{viewModel.form.formState.errors.isStudent?.message}</FormHelperText>
//                                     </FormControl>
//                                 )}
//                             />
//                         </>
//                     )}

//                     {viewModel.step === 3 && (
//                         <>
//                             <Controller
//                                 name="password"
//                                 control={viewModel.form.control}
//                                 render={({ field, fieldState: { error } }) => (
//                                     <TextField
//                                         {...field}
//                                         fullWidth
//                                         label="Password"
//                                         type="password"
//                                         placeholder="••••••••"
//                                         error={!!error}
//                                         helperText={error?.message}
//                                     />
//                                 )}
//                             />

//                             <Controller
//                                 name="confirmPassword"
//                                 control={viewModel.form.control}
//                                 render={({ field, fieldState: { error } }) => (
//                                     <TextField
//                                         {...field}
//                                         fullWidth
//                                         label="Confirm Password"
//                                         type="password"
//                                         placeholder="••••••••"
//                                         error={!!error}
//                                         helperText={error?.message}
//                                     />
//                                 )}
//                             />
//                         </>
//                     )}

//                     {viewModel.step === 4 && (
//                         <>
//                             <Controller
//                                 name="agreeToTerms"
//                                 control={viewModel.form.control}
//                                 render={({ field: { onChange, value, ref } }) => (
//                                     <FormControl error={!!viewModel.form.formState.errors.agreeToTerms}>
//                                         <FormControlLabel
//                                             control={
//                                                 <Checkbox
//                                                     checked={value}
//                                                     onChange={onChange}
//                                                     inputRef={ref}
//                                                 />
//                                             }
//                                             label="I agree to the terms and conditions"
//                                         />
//                                         <FormHelperText error>{viewModel.form.formState.errors.agreeToTerms?.message}</FormHelperText>
//                                     </FormControl>
//                                 )}
//                             />

//                         </>
//                     )}


//                     <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
//                         <Button onClick={viewModel.handlePrevStep} style={{ backgroundColor: 'lightcoral' }} variant="outlined" type="button">
//                             Back
//                         </Button>
//                         {viewModel.step < 4 && (<Button onClick={viewModel.handleNextStep} style={{ backgroundColor: 'springgreen' }} variant="outlined" type="button">
//                             Next
//                         </Button>)}
//                     </Box>
//                     {viewModel.step === 4 && (
//                         <Button style={{ width: 'fit-content', position: 'relative', left: '50%', transform: 'translateX(-50%)' }} variant="contained" color="primary" type="submit">
//                             Submit
//                         </Button>
//                     )}

//                 </form>


//             </FormControl>
//         </Box>
//     );
// }




// with step bar
// 'use client'

// import {
//     TextField, FormControl, Button, Box, CardContent,
//     RadioGroup, FormControlLabel, Radio, Select, MenuItem, InputLabel,
//     FormHelperText, FormLabel, Checkbox, Card
// } from '@mui/material';
// import { Controller } from 'react-hook-form';
// import UseMultiStepViewModel from '../../hooks/stdFormHook';
// import StepBar from './StepBar';

// export default function Form() {
//     const viewModel = UseMultiStepViewModel();

//     return (
//         <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', py: 4 }}>
//             <Card sx={{ width: '100%', maxWidth: '576px', p: 3 }}>
//                 <form onSubmit={viewModel.form.handleSubmit(viewModel.onSubmit)}>
//                     <StepBar activeStep={viewModel.step} steps={viewModel.stepObjects} />

//                     <Box sx={{ mb: 3 }}>
//                         <FormControl fullWidth>
//                         {viewModel.step === 1 && (
//                         <>
//                             <CardContent sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 4 }}>

//                                 <Controller
//                                     name="firstName"
//                                     control={viewModel.form.control}
//                                     render={({ field: { onChange, value }, fieldState: { error } }) => (
//                                         <TextField
//                                             fullWidth
//                                             label="First Name"
//                                             placeholder="Mahir"
//                                             value={value}
//                                             onChange={onChange}
//                                             error={!!error}
//                                             helperText={error?.message}
//                                         />
//                                     )}
//                                 />

//                                 <Controller
//                                     name="middleName"
//                                     control={viewModel.form.control}
//                                     render={({ field: { onChange, value }, fieldState: { error } }) => (
//                                         <TextField
//                                             fullWidth
//                                             label="Middle Name"
//                                             placeholder="M"
//                                             value={value}
//                                             onChange={onChange}
//                                             error={!!error}
//                                             helperText={error?.message}
//                                         />
//                                     )}
//                                 />

//                                 <Controller
//                                     name="lastName"
//                                     control={viewModel.form.control}
//                                     render={({ field: { onChange, value }, fieldState: { error } }) => (
//                                         <TextField
//                                             fullWidth
//                                             label="Last Name"
//                                             placeholder="Ramani"
//                                             value={value}
//                                             onChange={onChange}
//                                             error={!!error}
//                                             helperText={error?.message}
//                                         />
//                                     )}
//                                 />

//                             </CardContent>

//                             <Controller
//                                 name="mobileNo"
//                                 control={viewModel.form.control}
//                                 render={({ field, fieldState: { error } }) => (
//                                     <TextField
//                                         {...field}
//                                         fullWidth
//                                         label="Mobile No."
//                                         placeholder="123-456-7890"
//                                         error={!!error}
//                                         helperText={error?.message}
//                                     />
//                                 )}
//                             />

//                             <Controller
//                                 name="email"
//                                 control={viewModel.form.control}
//                                 render={({ field, fieldState: { error } }) => (
//                                     <TextField
//                                         {...field}
//                                         fullWidth
//                                         label="Email"
//                                         placeholder="example@example.com"
//                                         error={!!error}
//                                         helperText={error?.message}
//                                     />
//                                 )}
//                             />
//                         </>
//                     )}

//                     {viewModel.step === 2 && (
//                         <>

//                             <Controller
//                                 name="country"
//                                 control={viewModel.form.control}
//                                 render={({ field }) => (
//                                     <FormControl fullWidth error={!!viewModel.form.formState.errors.country}>
//                                         <InputLabel id="country-label">Country</InputLabel>
//                                         <Select
//                                             {...{ field, ref: undefined }}
//                                             onChange={field.onChange}
//                                             labelId="country-label"
//                                             label="Country"
//                                         >
//                                             <MenuItem value="">Select a country</MenuItem>
//                                             <MenuItem value="us">United States</MenuItem>
//                                             <MenuItem value="uk">United Kingdom</MenuItem>
//                                             <MenuItem value="ca">Canada</MenuItem>
//                                             <MenuItem value="au">Australia</MenuItem>
//                                         </Select>
//                                         <FormHelperText error>{viewModel.form.formState.errors.country?.message}</FormHelperText>
//                                     </FormControl>
//                                 )}
//                             />

//                             <Controller
//                                 name="isStudent"
//                                 control={viewModel.form.control}
//                                 render={({ field }) => (
//                                     <FormControl component="fieldset" error={!!viewModel.form.formState.errors.isStudent}>
//                                         <FormLabel component="legend">Are you a student?</FormLabel>
//                                         <RadioGroup row {...field}>
//                                             <FormControlLabel value="yes" control={<Radio />} label="Yes" />
//                                             <FormControlLabel value="no" control={<Radio />} label="No" />
//                                         </RadioGroup>
//                                         <FormHelperText error>{viewModel.form.formState.errors.isStudent?.message}</FormHelperText>
//                                     </FormControl>
//                                 )}
//                             />
//                         </>
//                     )}

//                     {viewModel.step === 3 && (
//                         <>
//                             <Controller
//                                 name="password"
//                                 control={viewModel.form.control}
//                                 render={({ field, fieldState: { error } }) => (
//                                     <TextField
//                                         {...field}
//                                         fullWidth
//                                         label="Password"
//                                         type="password"
//                                         placeholder="••••••••"
//                                         error={!!error}
//                                         helperText={error?.message}
//                                     />
//                                 )}
//                             />

//                             <Controller
//                                 name="confirmPassword"
//                                 control={viewModel.form.control}
//                                 render={({ field, fieldState: { error } }) => (
//                                     <TextField
//                                         {...field}
//                                         fullWidth
//                                         label="Confirm Password"
//                                         type="password"
//                                         placeholder="••••••••"
//                                         error={!!error}
//                                         helperText={error?.message}
//                                     />
//                                 )}
//                             />
//                         </>
//                     )}

//                     {viewModel.step === 4 && (
//                         <>
//                             <Controller
//                                 name="agreeToTerms"
//                                 control={viewModel.form.control}
//                                 render={({ field: { onChange, value, ref } }) => (
//                                     <FormControl error={!!viewModel.form.formState.errors.agreeToTerms}>
//                                         <FormControlLabel
//                                             control={
//                                                 <Checkbox
//                                                     checked={value}
//                                                     onChange={onChange}
//                                                     inputRef={ref}
//                                                 />
//                                             }
//                                             label="I agree to the terms and conditions"
//                                         />
//                                         <FormHelperText error>{viewModel.form.formState.errors.agreeToTerms?.message}</FormHelperText>
//                                     </FormControl>
//                                 )}
//                             />

//                         </>
//                     )}
//                         </FormControl>
//                     </Box>

//                     <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
//                         {viewModel.step > 1 && (
//                             <Button onClick={viewModel.handlePrevStep} variant="outlined" color="secondary">
//                                 Back
//                             </Button>
//                         )}
//                         {viewModel.step < 4 ? (
//                             <Button onClick={viewModel.handleNextStep} variant="contained" color="primary">
//                                 Next
//                             </Button>
//                         ) : (
//                             <Button type="submit" variant="contained" color="primary">
//                                 Submit
//                             </Button>
//                         )}
//                     </Box>
//                 </form>
//             </Card>
//         </Box>
//     );
// }




// v3
// 'use client'

// import React from 'react';
// import {
//     TextField, FormControl, Button, Box, CardContent,
//     RadioGroup, FormControlLabel, Radio, Select, MenuItem,
//     FormHelperText, Checkbox, Card, Typography
// } from '@mui/material';
// import { Controller } from 'react-hook-form';
// import UseMultiStepViewModel from '../../hooks/stdFormHook';
// import StepBar from './StepBar';

// export default function Form() {
//     const viewModel = UseMultiStepViewModel();

//     return (
//         <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', py: 4 }}>
//             <Card sx={{ width: '100%', maxWidth: '576px', p: 3 }}>
//                 <form onSubmit={viewModel.form.handleSubmit(viewModel.onSubmit)}>
//                     <StepBar activeStep={viewModel.step} steps={viewModel.stepObjects} />

//                     <Typography variant="h6" sx={{ mb: 2 }}>
//                         {viewModel.stepObjects[viewModel.step - 1].title}
//                     </Typography>

//                     <Box sx={{ mb: 3 }}>
//                         <FormControl fullWidth>
//                             {viewModel.step === 1 && (
//                                 <>
//                                     <Controller
//                                         name="firstName"
//                                         control={viewModel.form.control}
//                                         render={({ field, fieldState: { error } }) => (
//                                             <TextField
//                                                 {...field}
//                                                 fullWidth
//                                                 placeholder="First Name"
//                                                 error={!!error}
//                                                 helperText={error?.message}
//                                                 sx={{ mb: 2 }}
//                                             />
//                                         )}
//                                     />
//                                     <Controller
//                                         name="middleName"
//                                         control={viewModel.form.control}
//                                         render={({ field, fieldState: { error } }) => (
//                                             <TextField
//                                                 {...field}
//                                                 fullWidth
//                                                 placeholder="Middle Name"
//                                                 error={!!error}
//                                                 helperText={error?.message}
//                                                 sx={{ mb: 2 }}
//                                             />
//                                         )}
//                                     />
//                                     <Controller
//                                         name="lastName"
//                                         control={viewModel.form.control}
//                                         render={({ field, fieldState: { error } }) => (
//                                             <TextField
//                                                 {...field}
//                                                 fullWidth
//                                                 placeholder="Last Name"
//                                                 error={!!error}
//                                                 helperText={error?.message}
//                                                 sx={{ mb: 2 }}
//                                             />
//                                         )}
//                                     />
//                                     <Controller
//                                         name="mobileNo"
//                                         control={viewModel.form.control}
//                                         render={({ field, fieldState: { error } }) => (
//                                             <TextField
//                                                 {...field}
//                                                 fullWidth
//                                                 placeholder="Mobile Number"
//                                                 error={!!error}
//                                                 helperText={error?.message}
//                                                 sx={{ mb: 2 }}
//                                             />
//                                         )}
//                                     />
//                                     <Controller
//                                         name="email"
//                                         control={viewModel.form.control}
//                                         render={({ field, fieldState: { error } }) => (
//                                             <TextField
//                                                 {...field}
//                                                 fullWidth
//                                                 placeholder="Email"
//                                                 error={!!error}
//                                                 helperText={error?.message}
//                                                 sx={{ mb: 2 }}
//                                             />
//                                         )}
//                                     />
//                                 </>
//                             )}
//                             {viewModel.step === 2 && (
//                                 <>
//                                     <Controller
//                                         name="country"
//                                         control={viewModel.form.control}
//                                         render={({ field, fieldState: { error } }) => (
//                                             <FormControl fullWidth error={!!error} sx={{ mb: 2 }}>
//                                                 <Select
//                                                     {...field}
//                                                     displayEmpty
//                                                     placeholder="Select Country"
//                                                 >
//                                                     <MenuItem value="">Select Country</MenuItem>
//                                                     <MenuItem value="us">United States</MenuItem>
//                                                     <MenuItem value="uk">United Kingdom</MenuItem>
//                                                     <MenuItem value="ca">Canada</MenuItem>
//                                                     <MenuItem value="au">Australia</MenuItem>
//                                                 </Select>
//                                                 <FormHelperText>{error?.message}</FormHelperText>
//                                             </FormControl>
//                                         )}
//                                     />
//                                     <Controller
//                                         name="isStudent"
//                                         control={viewModel.form.control}
//                                         render={({ field, fieldState: { error } }) => (
//                                             <FormControl component="fieldset" error={!!error} sx={{ mb: 2 }}>
//                                                 <RadioGroup row {...field}>
//                                                     <FormControlLabel value="yes" control={<Radio />} label="Yes, I'm a student" />
//                                                     <FormControlLabel value="no" control={<Radio />} label="No, I'm not a student" />
//                                                 </RadioGroup>
//                                                 <FormHelperText>{error?.message}</FormHelperText>
//                                             </FormControl>
//                                         )}
//                                     />
//                                 </>
//                             )}
//                             {viewModel.step === 3 && (
//                                 <>
//                                     <Controller
//                                         name="password"
//                                         control={viewModel.form.control}
//                                         render={({ field, fieldState: { error } }) => (
//                                             <TextField
//                                                 {...field}
//                                                 fullWidth
//                                                 type="password"
//                                                 placeholder="Password"
//                                                 error={!!error}
//                                                 helperText={error?.message}
//                                                 sx={{ mb: 2 }}
//                                             />
//                                         )}
//                                     />
//                                     <Controller
//                                         name="confirmPassword"
//                                         control={viewModel.form.control}
//                                         render={({ field, fieldState: { error } }) => (
//                                             <TextField
//                                                 {...field}
//                                                 fullWidth
//                                                 type="password"
//                                                 placeholder="Confirm Password"
//                                                 error={!!error}
//                                                 helperText={error?.message}
//                                                 sx={{ mb: 2 }}
//                                             />
//                                         )}
//                                     />
//                                 </>
//                             )}
//                             {viewModel.step === 4 && (
//                                 <Controller
//                                     name="agreeToTerms"
//                                     control={viewModel.form.control}
//                                     render={({ field, fieldState: { error } }) => (
//                                         <FormControl error={!!error} sx={{ mb: 2 }}>
//                                             <FormControlLabel
//                                                 control={<Checkbox {...field} />}
//                                                 label="I agree to the terms and conditions"
//                                             />
//                                             <FormHelperText>{error?.message}</FormHelperText>
//                                         </FormControl>
//                                     )}
//                                 />
//                             )}
//                         </FormControl>
//                     </Box>

//                     <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
//                         {viewModel.step > 1 && (
//                             <Button onClick={viewModel.handlePrevStep} variant="outlined" color="secondary">
//                                 Back
//                             </Button>
//                         )}
//                         {viewModel.step < 4 ? (
//                             <Button onClick={viewModel.handleNextStep} variant="contained" color="primary">
//                                 Next
//                             </Button>
//                         ) : (
//                             <Button type="submit" variant="contained" color="primary">
//                                 Submit
//                             </Button>
//                         )}
//                     </Box>
//                 </form>
//             </Card>
//         </Box>
//     );
// }



// v4
'use client'

import React from 'react';
import {
    TextField, FormControl, Button, Box, CardContent,
    RadioGroup, FormControlLabel, Radio, Select, MenuItem,
    FormHelperText, Checkbox, Card, Typography
} from '@mui/material';
import { Controller } from 'react-hook-form';
import UseMultiStepViewModel from '../../hooks/stdFormHook';
import StepBar from './StepBar';
import { Step1, Step2, Step3 } from './FormSteps';

export default function Form() {
    const viewModel = UseMultiStepViewModel();

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', py: 4 }}>
            <Card sx={{ width: '100%', maxWidth: '576px', p: 3 }}>
                <form onSubmit={viewModel.form.handleSubmit(viewModel.onSubmit)}>
                    <StepBar activeStep={viewModel.step} steps={viewModel.stepObjects} />

                    <Typography variant="h6" sx={{ mb: 2 }}>
                        {viewModel.stepObjects[viewModel.step - 1].title}
                    </Typography>

                    <Box sx={{ mb: 3 }}>
                        <FormControl fullWidth>

                        <div>
      {viewModel.step === 1 && <Step1 viewModel={viewModel} />}
      {viewModel.step === 2 && <Step2 viewModel={viewModel} />}
      {viewModel.step === 3 && <Step3 viewModel={viewModel} />}
      {/* Add navigation buttons and other form elements */}
    </div>
                            {viewModel.step === 1 && (
                                <>
                                    <Controller
                                        name="firstName"
                                        control={viewModel.form.control}
                                        render={({ field, fieldState: { error } }) => (
                                            <TextField
                                                {...field}
                                                fullWidth
                                                label="First Name"
                                                placeholder="First Name"
                                                error={!!error}
                                                helperText={error?.message}
                                                sx={{ mb: 2 }}
                                            />
                                        )}
                                    />
                                    <Controller

                                        name="middleName"
                                        control={viewModel.form.control}
                                        render={({ field, fieldState: { error } }) => (
                                            <TextField
                                                {...field}
                                                fullWidth
                                                placeholder="Middle Name"
                                                error={!!error}
                                                helperText={error?.message}
                                                sx={{ mb: 2 }}
                                            />
                                        )}
                                    />
                                    <Controller
                                        name="lastName"
                                        control={viewModel.form.control}
                                        render={({ field, fieldState: { error } }) => (
                                            <TextField
                                                {...field}
                                                fullWidth
                                                placeholder="Last Name"
                                                error={!!error}
                                                helperText={error?.message}
                                                sx={{ mb: 2 }}
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
                                                placeholder="Mobile Number"
                                                error={!!error}
                                                helperText={error?.message}
                                                sx={{ mb: 2 }}
                                            />
                                        )}
                                    />
                                    <Controller
                                        name="email"
                                        control={viewModel.form.control}
                                        render={({ field, fieldState: { error } }) => (
                                            <TextField
                                                {...field}
                                                fullWidth
                                                placeholder="Email"
                                                error={!!error}
                                                helperText={error?.message}
                                                sx={{ mb: 2 }}
                                            />
                                        )}
                                    />
                                </>
                            )}
                            {viewModel.step === 2 && (
                                <>
                                    <Controller
                                        name="country"
                                        control={viewModel.form.control}
                                        render={({ field, fieldState: { error } }) => (
                                            <FormControl fullWidth error={!!error} sx={{ mb: 2 }}>
                                                <Select
                                                    {...field}
                                                    displayEmpty
                                                    placeholder="Select Country"
                                                >
                                                    <MenuItem value="">Select Country</MenuItem>
                                                    <MenuItem value="us">United States</MenuItem>
                                                    <MenuItem value="uk">United Kingdom</MenuItem>
                                                    <MenuItem value="ca">Canada</MenuItem>
                                                    <MenuItem value="au">Australia</MenuItem>
                                                </Select>
                                                <FormHelperText>{error?.message}</FormHelperText>
                                            </FormControl>
                                        )}
                                    />
                                    <Controller
                                        name="isStudent"
                                        control={viewModel.form.control}
                                        render={({ field, fieldState: { error } }) => (
                                            <FormControl component="fieldset" error={!!error} sx={{ mb: 2 }}>
                                                <RadioGroup row {...field}>
                                                    <FormControlLabel value="yes" control={<Radio />} label="Yes, I'm a student" />
                                                    <FormControlLabel value="no" control={<Radio />} label="No, I'm not a student" />
                                                </RadioGroup>
                                                <FormHelperText>{error?.message}</FormHelperText>
                                            </FormControl>
                                        )}
                                    />
                                </>
                            )}
                            {viewModel.step === 3 && (
                                <>
                                    <Controller
                                        name="password"
                                        control={viewModel.form.control}
                                        render={({ field, fieldState: { error } }) => (
                                            <TextField
                                                {...field}
                                                fullWidth
                                                type="password"
                                                placeholder="Password"
                                                error={!!error}
                                                helperText={error?.message}
                                                sx={{ mb: 2 }}
                                            />
                                        )}
                                    />
                                    <Controller
                                        name="confirmPassword"
                                        control={viewModel.form.control}
                                        render={({ field, fieldState: { error } }) => (
                                            <TextField
                                                {...field}
                                                fullWidth
                                                type="password"
                                                placeholder="Confirm Password"
                                                error={!!error}
                                                helperText={error?.message}
                                                sx={{ mb: 2 }}
                                            />
                                        )}
                                    />
                                </>
                            )}
                            {viewModel.step === 4 && (
                                <Controller
                                    name="agreeToTerms"
                                    control={viewModel.form.control}
                                    render={({ field, fieldState: { error } }) => (
                                        //NOTE - <FormControl error={!!error && viewModel.isSubmitted} sx={{ mb: 2 }}>
                                        <FormControl error={!!error} sx={{ mb: 2 }}>
                                            <FormControlLabel
                                                control={<Checkbox {...field} />}
                                                label="I agree to the terms and conditions"
                                            />
                                            {error && viewModel.isSubmitted && (
                                                <FormHelperText>{error.message}</FormHelperText>
                                            )}
                                        </FormControl>
                                    )}
                                />
                            )}
                        </FormControl>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        {viewModel.step > 1 && (
                            <Button onClick={viewModel.handlePrevStep} variant="outlined" color="secondary">
                                Back
                            </Button>
                        )}
                        {viewModel.step < 4 ? (
                            <Button onClick={viewModel.handleNextStep} variant="contained" color="primary">
                                Next
                            </Button>
                        ) : (
                            <Button onClick={viewModel.handleSubmit} variant="contained" color="primary">
                                Submit
                            </Button>
                        )}
                    </Box>
                </form>
            </Card>
        </Box>
    );
}