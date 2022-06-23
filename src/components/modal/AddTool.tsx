import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { toolActions } from '../../store/tools/duck'
import toolSelector from '../../store/tools/selector'
import {
  BackgroundModalTool,
  ButtonModal,
  ContainerAddTool,
  DivButtonsModal,
  DivError,
  DivFieldTools,
  DivInputTool,
  InputAddTool,
  LabelInputAddTool,
  SelectTags,
  TextareaDescriptionAddTool,
  TitleModal
} from './Modal.styles'
import { Tool } from '../../models/ToolDTO'
import { useEffect, useState } from 'react'
import { Tag } from '../../models/TagDTO'
import { useId } from 'react'

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  link: Yup.string()
    .min(8, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  description: Yup.string().required('Required'),
  tag: Yup.array().required('Required')
})

function AddTool() {
  const dispatch = useDispatch()
  const tools = useSelector(toolSelector.get)
  const [tagTool, setTagTool] = useState([{}])
  const id = useId()

  const getTags = (tools: Tool[]) => {
    const arrayTags = [{}]
    tools?.map(tool => {
      tool.tag?.map(tag => {
        arrayTags.push({ value: tag.name, label: tag.name })
      })
    })
    setTagTool(arrayTags)
  }

  const handleChange = (value: Tag[], setFieldValue: Function) => {
    let list = value?.map((item: any) => item.value)
    setFieldValue('tag', list)
  }

  useEffect(() => {
    getTags(tools)
  }, [])

  return (
    <BackgroundModalTool>
      <Formik
        initialValues={{
          name: '',
          link: '',
          description: '',
          tag: []
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          const { name, link, description, tag } = values
          const toolItemValue = {
            name,
            link,
            description,
            tag: tag.map(item => {
              return { id: id, name: item }
            })
          }

          dispatch(toolActions.create(toolItemValue))
          dispatch(toolActions.toggleOpenModalAdd())
        }}
      >
        {props => (
          <Form>
            <ContainerAddTool>
              <TitleModal paddingLeft="17px">
                <svg
                  width="17"
                  height="14"
                  viewBox="0 0 17 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.375 8H9.625V14H7.375V8H0.625V6H7.375V0H9.625V6H16.375V8Z"
                    fill="#170C3A"
                  />
                </svg>
                Add new tool
              </TitleModal>
              <DivInputTool>
                <DivFieldTools>
                  <LabelInputAddTool htmlFor="name">
                    Tool Name
                  </LabelInputAddTool>
                  <Field
                    as={InputAddTool}
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Digite o nome da ferramenta."
                  />
                  {props.errors.name && props.touched.name ? (
                    <DivError>{props.errors.name}</DivError>
                  ) : null}
                </DivFieldTools>

                <DivFieldTools>
                  <LabelInputAddTool htmlFor="link">
                    Tool Link
                  </LabelInputAddTool>
                  <Field
                    as={InputAddTool}
                    type="text"
                    id="link"
                    name="link"
                    placeholder="Digite o link da ferramenta. (ex: www.google.com)"
                  />
                  {props.errors.link && props.touched.link ? (
                    <DivError>{props.errors.link}</DivError>
                  ) : null}
                </DivFieldTools>

                <DivFieldTools>
                  <LabelInputAddTool htmlFor="description">
                    Tool Description
                  </LabelInputAddTool>
                  <Field
                    as={TextareaDescriptionAddTool}
                    id="description"
                    name="description"
                    placeholder="Descreva a ferramenta."
                  />
                  {props.errors.description && props.touched.description ? (
                    <DivError>{props.errors.description}</DivError>
                  ) : null}
                </DivFieldTools>

                <DivFieldTools>
                  <LabelInputAddTool htmlFor="tag">Tool Tags</LabelInputAddTool>
                  <Field
                    component={SelectTags}
                    options={tagTool}
                    isMulti={true}
                    onChange={(event: Tag[]) =>
                      handleChange(event, props.setFieldValue)
                    }
                    id="tag"
                    name="tag"
                    placeholder="Digite as tags da ferramenta."
                  />
                  {props.errors.tag && props.touched.tag ? (
                    <DivError>{props.errors.tag}</DivError>
                  ) : null}
                </DivFieldTools>
              </DivInputTool>

              <DivButtonsModal>
                <ButtonModal
                  onClick={() => dispatch(toolActions.toggleOpenModalAdd())}
                  color="#365df0"
                  background="#e1e7fd"
                  type="button"
                >
                  Cancel
                </ButtonModal>

                <ButtonModal color="#ffffff" background="#365df0" type="submit">
                  Add tool
                </ButtonModal>
              </DivButtonsModal>
            </ContainerAddTool>
          </Form>
        )}
      </Formik>
    </BackgroundModalTool>
  )
}
export default AddTool
