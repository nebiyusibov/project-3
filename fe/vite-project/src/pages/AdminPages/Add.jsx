import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
function Add() {
  return (
    <Formik 
    initialValues={{ image: '', name: '', email: '' }}
    validationSchema={Yup.object({
      image: Yup.string()
        .required('Required'),
        
      name: Yup.string()
        .required('Required'),

      price: Yup.number()
        .required('Required'),
    })}
    onSubmit={(values, { setSubmitting }) => {
      async function getProduct() {
        const res=await fetch("http://localhost:3000/product",
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values)
        }
        )
        const data=await res.json()
        console.log(data);
      }
      getProduct()
      setTimeout(() => {
        setSubmitting(false);
      }, 400);
    }}
  >
    <Form>
      <label htmlFor="image">image</label> <br />
      <Field name="image" type="text" />
      <ErrorMessage name="image" />  <br /> <br />

      <label htmlFor="name">name</label> <br />
      <Field name="name" type="text" />
      <ErrorMessage name="name" /> <br /> <br />

      <label htmlFor="price">price</label> <br />
      <Field name="price" type="text" />
      <ErrorMessage name="price" /> <br /> <br />

      

      <button type="submit">Submit</button>
    </Form>
  </Formik>
  )
}

export default Add
