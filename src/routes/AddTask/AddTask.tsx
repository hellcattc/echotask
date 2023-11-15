import { Button } from '@/components/layout/UI'
import Input from '@/components/layout/UI/Input'
import useBackNavigate from '@/hooks/useBackNavigate'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { addTask } from '@/store/slices/taskSlice'
import { MouseEvent, useCallback, useRef } from 'react'

const AddTask = () => {
  const headerRef = useRef<HTMLInputElement>(null)
  const contentRef = useRef<HTMLInputElement>(null)
  const backNavigate = useBackNavigate()
  const dispatch = useAppDispatch()
  const lastId = useAppSelector(
    (state) => state.taskReducer[state.taskReducer.length - 1].id,
  )

  const handleInnerDivClick = useCallback((event: MouseEvent) => {
    event.stopPropagation()
  }, [])

  const handleFormSubmit = useCallback(
    (event: MouseEvent<HTMLFormElement>) => {
      event.preventDefault()
      if (headerRef.current?.value === '' && contentRef.current?.value === '') {
        return
      }
      dispatch(
        addTask({
          id: lastId + 1,
          header: headerRef.current?.value,
          content: contentRef.current?.value,
        }),
      )
      backNavigate()
    },
    [backNavigate, dispatch, lastId],
  )

  return (
    <div
      className="w-screen h-screen bg-black bg-opacity-80 fixed top-0 flex justify-center"
      onClick={backNavigate}
    >
      <div
        className="w-2/3 bg-white self-center flex justify-center"
        onClick={handleInnerDivClick}
      >
        <form
          className="m-10 w-full"
          style={{ height: 'inherit' }}
          onSubmit={handleFormSubmit}
        >
          <Input
            placeholder="Заголовок..."
            className="block mb-6 p-2 pl-4"
            ref={headerRef}
          ></Input>
          <Input
            placeholder=""
            className="block w-full h-40"
            ref={contentRef}
          ></Input>
          <Button className="mt-6">Создать таск</Button>
        </form>
      </div>
    </div>
  )
}

export default AddTask
