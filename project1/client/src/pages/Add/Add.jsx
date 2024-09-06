import React from 'react'
import './Add.css'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const SignupSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  img:Yup.string().required('Required'),
  text:Yup.string().required('Required'),
});

export const Add = () => (
  <div className='add'>
    <h1>Add page</h1> <br/> <br/>
    <Formik
      initialValues={{
        title:'',
        date:'',
        comment:'',
        folder:'',
        img:'',
        text:''
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        console.log("Succesfully added!");
        const obj = {
          title:values.title,
          date:values.date,
          comment:values.comment,
          folder:values.folder,
          img:values.img,
          text:values.text
        }
        axios.post("http://localhost:4000/box",obj)
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field className="field" name="title" placeholder="title:"/>
          {errors.title && touched.title ? (
            <div>{errors.title}</div>
          ) : null}
          <br/> <br/>
          <Field className="field" name="date" placeholder="date"/>
          
           <br/> <br/>
           <Field className="field" name="comment" placeholder="comment"/>
          
           <br/> <br/>
           <Field className="field" name="folder" placeholder="folder"/>
          
           <br/> <br/>
           <Field className="field" name="img" placeholder="image url"/>
          {errors.img && touched.img ? (
            <div>{errors.img}</div>
          ) : null}
           <br/> <br/>
          <Field className="field" name="text" type="text" placeholder="text"/>
          {errors.text && touched.text ? <div>{errors.text}</div> : null}
          <br/> <br/>
          <button type="submit" className='sbmtbtn'>Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Add


