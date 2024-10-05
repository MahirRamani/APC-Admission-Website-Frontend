// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { z } from 'zod';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { StepObjectType } from "../components/form-components/step-Object";

// const stdSchema = z.object({
//     firstName: z.string().min(2, { message: 'First name is too short' }),
//     middleName: z.string().min(2, { message: 'Middle name is too short' }),
//     lastName: z.string().min(2, { message: 'Last name is too short' }),
//     mobileNo: z.string().min(10, { message: 'Mobile number is too short' }),
//     email: z.string().email({ message: 'Invalid email address' }),
//     country: z.string().min(1, { message: 'Select your country' }),
//     isStudent: z.enum(['yes', 'no'], { required_error: 'Select if you are a student' }),
//     password: z.string().min(6, { message: 'Password is too short' }),
//     confirmPassword: z.string().min(6, { message: 'Password is too short' }),
//     agreeToTerms: z.boolean().refine((val) => val === true, {
//         message: 'You must agree to the terms and conditions',
//     }),
// }).refine((data) => data.password === data.confirmPassword, {
//     message: "Passwords don't match",
//     path: ["confirmPassword"],
// }); //TODO: Add more validation

// type StdData = z.infer<typeof stdSchema>;


// const stepObjects: StepObjectType[] = [{
//     id: 1,
//     title: "Personal Information",
//     description: "Fill out the form below to get started.",
//     fields: ['firstName', 'middleName', 'lastName', 'mobileNo', 'email'],
// }, {
//     id: 2,
//     title: "Country Information",
//     description: "Fill out the form below to get started.",
//     fields: ['country', 'isStudent'],
// },
// {
//     id: 3,
//     title: "Account Information",
//     description: "Fill out the form below to get started.",
//     fields: ['password', 'confirmPassword'],
// }, {
//     id: 4,
//     title: "Terms and Conditions",
//     description: "Fill out the form below to get started.",
//     fields: ['agreeToTerms'],
// }

// ]

// export default function UseMultiStepViewModel() {


//     const [step, setStep] = React.useState(1);

//     const errors = useForm<StdData>
//     const form = useForm<StdData>({
//         resolver: zodResolver(stdSchema),
//         defaultValues: {
//             firstName: '',
//             middleName: '',
//             lastName: '',
//             mobileNo: '',
//             email: '',
//             country: '',
//             isStudent: undefined,
//             password: '',
//             confirmPassword: '',
//             agreeToTerms: false,
//         }
//     });

//     const onSubmit = React.useCallback((data: StdData) => {
//         console.log(data);
//     },[form]);

//     const handlePrevStep = React.useCallback(() => {
//         if (step > 1) {
//             setStep((step) => step - 1);
//         }
//     }, [step])

//     const handleNextStep = React.useCallback(() => {
//         if (step <= 3) {
//             setStep((step) => step + 1);
//         }
//         else {
//             setStep(4);
//         }
//     }, [step])

//     return React.useMemo(() => ({
//         step,
//         setStep,
//         errors,
//         form,
//         onSubmit,
//         handlePrevStep,
//         handleNextStep,
//         stepObjects
//     }), [step, form, onSubmit, handlePrevStep, handleNextStep])

// }





// with step bar
// import React from 'react';
// import { FieldName, useForm } from 'react-hook-form';
// import { z } from 'zod';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { StepObjectType } from "../components/form-components/step-Object";

// // ... (keep your existing schema and type definitions)

// const stdSchema = z.object({
//     firstName: z.string().min(2, { message: 'First name is too short' }),
//     middleName: z.string().min(2, { message: 'Middle name is too short' }),
//     lastName: z.string().min(2, { message: 'Last name is too short' }),
//     mobileNo: z.string().min(10, { message: 'Mobile number is too short' }),
//     email: z.string().email({ message: 'Invalid email address' }),
//     country: z.string().min(1, { message: 'Select your country' }),
//     isStudent: z.enum(['yes', 'no'], { required_error: 'Select if you are a student' }),
//     password: z.string().min(6, { message: 'Password is too short' }),
//     confirmPassword: z.string().min(6, { message: 'Password is too short' }),
//     agreeToTerms: z.boolean().refine((val) => val === true, {
//         message: 'You must agree to the terms and conditions',
//     }),
// }).refine((data) => data.password === data.confirmPassword, {
//     message: "Passwords don't match",
//     path: ["confirmPassword"],
// }); //TODO: Add more validation

// type StdData = z.infer<typeof stdSchema>;


// const stepObjects: StepObjectType[] = [
//     {
//         id: 1,
//         title: "Personal Info",
//         description: "Basic personal information",
//         fields: ['firstName', 'middleName', 'lastName', 'mobileNo', 'email'],
//     },
//     {
//         id: 2,
//         title: "Location",
//         description: "Country and student status",
//         fields: ['country', 'isStudent'],
//     },
//     {
//         id: 3,
//         title: "Account",
//         description: "Set up your account",
//         fields: ['password', 'confirmPassword'],
//     },
//     {
//         id: 4,
//         title: "Terms",
//         description: "Review and accept terms",
//         fields: ['agreeToTerms'],
//     }
// ];

// export default function UseMultiStepViewModel() {
//     // ... (keep your existing hook logic)
//     const [step, setStep] = React.useState(1);

//     const errors = useForm<StdData>
//     const form = useForm<StdData>({
//         resolver: zodResolver(stdSchema),
//         defaultValues: {
//             firstName: '',
//             middleName: '',
//             lastName: '',
//             mobileNo: '',
//             email: '',
//             country: '',
//             isStudent: undefined,
//             password: '',
//             confirmPassword: '',
//             agreeToTerms: false,
//         }
//     });

//     const onSubmit = React.useCallback((data: z.infer<typeof stdSchema>) => {
//         console.log(data);
//     }, [step]);

//     const handlePrevStep = React.useCallback(() => {
//         if (step > 1) {
//             setStep((step) => step - 1);
//         }
//     }, [step])

//     const handleNextStep = React.useCallback(async () => {

//         const fields = stepObjects[step - 1].fields;

//         const validateFields = await form.trigger(fields as FieldName<z.infer<typeof stdSchema>>[]);

//         console.log("validateFields",validateFields)

//         if (step < 4 && validateFields) {
//             setStep((step) => step + 1);
//         }

//     }, [step,form])

//     return React.useMemo(() => ({
//         step,
//         setStep,
//         errors,
//         form,
//         onSubmit,
//         handlePrevStep,
//         handleNextStep,
//         stepObjects
//     }), [step, form, onSubmit, handlePrevStep, handleNextStep]);
// }


// v3
// import React from 'react';
// import { FieldName, useForm } from 'react-hook-form';
// import { z } from 'zod';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { StepObjectType } from "../components/form-components/step-Object";

// const stdSchema = z.object({
//     firstName: z.string().min(2, { message: 'First name is too short' }),
//     middleName: z.string().min(2, { message: 'Middle name is too short' }),
//     lastName: z.string().min(2, { message: 'Last name is too short' }),
//     mobileNo: z.string().min(10, { message: 'Mobile number is too short' }),
//     email: z.string().email({ message: 'Invalid email address' }),
//     country: z.string().min(1, { message: 'Select your country' }),
//     isStudent: z.enum(['yes', 'no'], { required_error: 'Select if you are a student' }),
//     password: z.string().min(6, { message: 'Password is too short' }),
//     confirmPassword: z.string().min(6, { message: 'Password is too short' }),
//     agreeToTerms: z.boolean().refine((val) => val === true, {
//         message: 'You must agree to the terms and conditions',
//     }),
// }).refine((data) => data.password === data.confirmPassword, {
//     message: "Passwords don't match",
//     path: ["confirmPassword"],
// });

// type StdData = z.infer<typeof stdSchema>;

// const stepObjects: StepObjectType[] = [
//     {
//         id: 1,
//         title: "Personal Info",
//         description: "Basic personal information",
//         fields: ['firstName', 'middleName', 'lastName', 'mobileNo', 'email'],
//     },
//     {
//         id: 2,
//         title: "Location",
//         description: "Country and student status",
//         fields: ['country', 'isStudent'],
//     },
//     {
//         id: 3,
//         title: "Account",
//         description: "Set up your account",
//         fields: ['password', 'confirmPassword'],
//     },
//     {
//         id: 4,
//         title: "Terms",
//         description: "Review and accept terms",
//         fields: ['agreeToTerms'],
//     }
// ];

// export default function UseMultiStepViewModel() {
//     const [step, setStep] = React.useState(1);

//     const form = useForm<StdData>({
//         resolver: zodResolver(stdSchema),
//         mode: 'onChange',
//         defaultValues: {
//             firstName: '',
//             middleName: '',
//             lastName: '',
//             mobileNo: '',
//             email: '',
//             country: '',
//             isStudent: undefined,
//             password: '',
//             confirmPassword: '',
//             agreeToTerms: false,
//         }
//     });

//     const onSubmit = React.useCallback((data: StdData) => {
//         console.log(data);
//     }, []);

//     const handlePrevStep = React.useCallback(() => {
//         if (step > 1) {
//             setStep((step) => step - 1);
//         }
//     }, [step]);

//     const handleNextStep = React.useCallback(async () => {
//         const fields = stepObjects[step - 1].fields;
//         const validateFields = await form.trigger(fields as FieldName<StdData>[]);

//         if (step < 4 && validateFields) {
//             setStep((step) => step + 1);
//         }
//     }, [step, form]);

//     return React.useMemo(() => ({
//         step,
//         setStep,
//         form,
//         onSubmit,
//         handlePrevStep,
//         handleNextStep,
//         stepObjects
//     }), [step, form, onSubmit, handlePrevStep, handleNextStep]);
// }


// v4
// import React from 'react';
// import { FieldName, useForm } from 'react-hook-form';
// import { z } from 'zod';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { StepObjectType } from "../components/form-components/step-Object";

// const stdSchema = z.object({

//     firstName: z.string().min(2, { message: 'First name is too short' }),
//     middleName: z.string().min(2, { message: 'Middle name is too short' }),
//     lastName: z.string().min(2, { message: 'Last name is too short' }),
//     mobileNo: z.string().min(10, { message: 'Mobile number is too short' }),
//     email: z.string().email({ message: 'Invalid email address' }),
//     country: z.string().min(1, { message: 'Select your country' }),
//     isStudent: z.enum(['yes', 'no'], { required_error: 'Select if you are a student' }),
//     password: z.string().min(6, { message: 'Password is too short' }),
//     confirmPassword: z.string().min(6, { message: 'Password is too short' }),
//     agreeToTerms: z.boolean().refine((val) => val === true, {
//         message: 'You must agree to the terms and conditions',
//     }),
// }).refine((data) => data.password === data.confirmPassword, {
//     message: "Passwords don't match",
//     path: ["confirmPassword"],
// });

// type StdData = z.infer<typeof stdSchema>;

// const stepObjects: StepObjectType[] = [
//     {
//         id: 1,
//         title: "Personal Info",
//         description: "Basic personal information",
//         fields: ['firstName', 'middleName', 'lastName', 'mobileNo', 'email'],
//     },
//     {
//         id: 2,
//         title: "Location",
//         description: "Country and student status",
//         fields: ['country', 'isStudent'],
//     },
//     {
//         id: 3,
//         title: "Account",
//         description: "Set up your account",
//         fields: ['password', 'confirmPassword'],
//     },
//     {
//         id: 4,
//         title: "Terms",
//         description: "Review and accept terms",
//         fields: ['agreeToTerms'],
//     }
// ];

// export default function UseMultiStepViewModel() {
//     const [step, setStep] = React.useState(1);
//     const [isSubmitted, setIsSubmitted] = React.useState(false);

//     const form = useForm<StdData>({
//         resolver: zodResolver(stdSchema),
//         mode: 'onChange',
//         defaultValues: {
//             firstName: '',
//             middleName: '',
//             lastName: '',
//             mobileNo: '',
//             email: '',
//             country: '',
//             isStudent: undefined,
//             password: '',
//             confirmPassword: '',
//             agreeToTerms: false,
//         }
//     });

//     const onSubmit = React.useCallback((data: StdData) => {
//         console.log(data);
//         // Handle form submission here
//         const response = fetch('http://localhost:3300/student/form/', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data),

//         })
//         .then((response) => response.json())
//         .then((data) => {
//                 console.log(data);
//                 console.log('Success:', data);
//             })
//             .catch((error) => {
//                 console.error('Error:', error);
//             });
//     }, []);

//     const handlePrevStep = React.useCallback(() => {
//         if (step > 1) {
//             setStep((step) => step - 1);
//         }
//     }, [step]);

//     const handleNextStep = React.useCallback(async () => {
//         const fields = stepObjects[step - 1].fields;
//         const validateFields = await form.trigger(fields as FieldName<StdData>[]);

//         if (step < 4 && validateFields) {
//             setStep((step) => step + 1);
//         }
//     }, [step]);

//     const handleSubmit = React.useCallback(async () => {
//         setIsSubmitted(true);
//         const isValid = await form.trigger();
//         if (isValid) {
//             form.handleSubmit(onSubmit)();
//         }
//     }, [form, onSubmit]);

//     return React.useMemo(() => ({
//         step,
//         setStep,
//         form,
//         onSubmit,
//         handlePrevStep,
//         handleNextStep,
//         handleSubmit,
//         stepObjects,
//         isSubmitted
//     }), [step, form, onSubmit, handlePrevStep, handleNextStep, handleSubmit, isSubmitted]);
// }








// final
import React from 'react';
import { FieldName, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { StepObjectType } from "../components/form-components/step-Object";

const stdSchema = z.object({
  surname: z.string().min(2, { message: 'Surname is too short' }),
  name: z.string().min(2, { message: 'Name is too short' }),
  fatherName: z.string().min(2, { message: 'Father name is too short' }),
  lastExaminationPassed: z.string().min(2, { message: 'Last examination passed is required' }),
  // percentage: z.number().min(0).max(100, { message: 'Percentage must be between 0 and 100' }),
  // percentage: z.number().min(0).max(100, { message: 'Percentage must be between 0 and 100' }),
  percentage: z
    .number()
    .min(0.01, 'Percentage must ') // Ensure it's greater than 0 if required
    .max(100, 'Percentage cannot exceed 100')
    .refine((val) => val !== 0, { message: 'Percentage is required and cannot be 0' }), // Error for not changing from default
  schoolCollegeLastPassed: z.string().min(2, { message: 'School/College name is required' }),
  cityOfSchoolCollegeLastPassed: z.string().min(2, { message: 'City is required' }),
  hostelPrivateStayedLast: z.string().min(2, { message: 'Last stay information is required' }),
  currentlyEnrolledIn: z.string().min(2, { message: 'Current enrollment information is required' }),
  currentYearStudying: z.string().min(1, { message: 'Current year of study is required' }),
  facultyBranch: z.string().min(2, { message: 'Faculty/Branch is required' }),
  fathersurname: z.string().min(2, { message: 'Father\'s surname is too short' }),
  fathername: z.string().min(2, { message: 'Father\'s name is too short' }),
  fatherfatherName: z.string().min(2, { message: 'Father\'s father name is too short' }),
  relationshipWithParent: z.string().min(2, { message: 'Relationship is required' }),
  mobileNo: z.string().min(10, { message: 'Mobile number is too short' }),
  whatsappNo: z.string().min(10, { message: 'WhatsApp number is too short' }),
  emailId: z.string().email({ message: 'Invalid email address' }),
  // annualIncome: z.number().min(0, { message: 'Annual income must be a positive number' }),
  annualIncome: z.number().min(0, { message: 'Annual income must be a positive number' }),
  jobOrBusiness: z.string({ message: 'Select job or business' }),
  jobType: z.string( { required_error: 'Select job type' }),
  nameOfJobBusiness: z.string().min(2, { message: 'Name of job/business is required' }),
  termsAndConditions: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the terms and conditions',
  }),
});

type StdData = z.infer<typeof stdSchema>;

const stepObjects: StepObjectType[] = [
  {
    id: 1,
    title: "Personal Info",
    description: "Basic personal information",
    fields: ['surname', 'name', 'fatherName', 'lastExaminationPassed', 'percentage', 'schoolCollegeLastPassed', 'cityOfSchoolCollegeLastPassed', 'hostelPrivateStayedLast', 'currentlyEnrolledIn', 'currentYearStudying', 'facultyBranch'],
  },
  {
    id: 2,
    title: "Father's Information",
    description: "Father's details",
    fields: ['fathersurname', 'fathername', 'fatherfatherName', 'relationshipWithParent', 'mobileNo', 'whatsappNo', 'emailId', 'annualIncome', 'jobOrBusiness', 'jobType', 'nameOfJobBusiness'],
  },
  {
    id: 3,
    title: "Additional Information",
    description: "Job or business information",
    fields: ['jobOrBusiness', 'jobType'],
  },
  {
    id: 4,
    title: "Terms & Conditions",
    description: "Review and accept terms",
    fields: ['termsAndConditions'],
  }
];

export default function UseMultiStepViewModel() {
  const [step, setStep] = React.useState(1);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const form = useForm<StdData>({
    resolver: zodResolver(stdSchema),
    mode: 'onChange',
    defaultValues: {
      surname: '',
      name: '',
      fatherName: '',
      lastExaminationPassed: '',
      percentage: 0,
      schoolCollegeLastPassed: '',
      cityOfSchoolCollegeLastPassed: '',
      hostelPrivateStayedLast: '',
      currentlyEnrolledIn: '',
      currentYearStudying: '',
      facultyBranch: '',
      fathersurname: '',
      fathername: '',
      fatherfatherName: '',
      relationshipWithParent: '',
      mobileNo: '',
      whatsappNo: '',
      emailId: '',
      annualIncome: 0,
      jobOrBusiness: '',
      jobType: '',
      nameOfJobBusiness: '',
      termsAndConditions: false,
    }
  });

  const onSubmit = React.useCallback((data: StdData) => {
    console.log(data);
    fetch('http://localhost:3300/student/form/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const handlePrevStep = React.useCallback(() => {
    if (step > 1) {
      setStep((step) => step - 1);
    }
  }, [step]);

  const handleNextStep = React.useCallback(async () => {
    const fields = stepObjects[step - 1].fields;
    const validateFields = await form.trigger(fields as FieldName<StdData>[]);

    if (step < 4 && validateFields) {
      setStep((step) => step + 1);
    }
  }, [step, form]);

  const handleSubmit = React.useCallback(async () => {
    setIsSubmitted(true);
    const isValid = await form.trigger();
    if (isValid) {
      form.handleSubmit(onSubmit)();
    }
  }, [form, onSubmit]);

  return React.useMemo(() => ({
    step,
    setStep,
    form,
    onSubmit,
    handlePrevStep,
    handleNextStep,
    handleSubmit,
    stepObjects,
    isSubmitted
  }), [step, form, onSubmit, handlePrevStep, handleNextStep, handleSubmit, isSubmitted]);
}