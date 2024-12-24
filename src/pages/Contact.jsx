import React from 'react';
import { Formik,Field } from 'formik';
import '/src/Contact.css';

function AboutMe() {
  return (
    <section>
      <h2>Contact</h2>
      <Formik
       initialValues={{ email: '', name: '', message: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         if(!values.name){
            errors.name='name is required'
         }
         if(!values.message){
            errors.message='message is required'
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
        alert(JSON.stringify(values, null, 2));
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
            <div>
            <label>Email:</label>
           <input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           {errors.email && touched.email && errors.email}
            </div>
           
            <div>
            <label>Name:</label>
           <input
             type="text"
             name="name"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.name}
           />
           {errors.name && touched.name && errors.name}
            </div>
            <div>
            <label>Message:</label>
           <Field name='message' component='textarea'></Field>
           {errors.message && touched.message && errors.message}
            </div>
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
    </section>
  );
}

export default AboutMe;