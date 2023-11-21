import { Button } from '@/components/UI'
import Input from '@/components/UI/Input'
import useBackNavigate from '@/hooks/useBackNavigate'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { addTask } from '@/store/slices/taskSlice'
import { MouseEvent, useCallback, useEffect, useRef, useState } from 'react'
import IconCheck from '@/components/UI/SVG/Check'
import IconCancel from '@/components/UI/SVG/Close'
import useDebounce from '@/hooks/useDebounce'

const DEBOUNCE_DELAY = 500

const AddTask = () => {
  const headerRef = useRef<HTMLInputElement>(null)
  const contentRef = useRef<HTMLInputElement>(null)
  const backNavigate = useBackNavigate()
  const dispatch = useAppDispatch()
  const lastId = useAppSelector(
    (state) => state.taskReducer[state.taskReducer.length - 1].id,
  )

  const [acceptable, setAcceptable] = useState(false)

  const debouncedCheck = useDebounce(
    () => {
      if (headerRef.current?.value === '' && contentRef.current?.value === '') {
        setAcceptable(false)
      } else {
        setAcceptable(true)
      }
    },
    DEBOUNCE_DELAY,
    [setAcceptable],
  )

  useEffect(() => {
    const headerChangeHandler = () => {
      debouncedCheck()
    }
    const contentChangeHandler = () => {
      debouncedCheck()
    }
    const header = headerRef.current
    const content = contentRef.current
    headerRef.current?.addEventListener('input', headerChangeHandler)
    contentRef.current?.addEventListener('input', contentChangeHandler)
    return () => {
      header?.removeEventListener('input', headerChangeHandler)
      content?.removeEventListener('input', contentChangeHandler)
    }
  }, [debouncedCheck])

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
            className="block mb-6 p-2 pl-4 w-fit bg-white"
            ref={headerRef}
          ></Input>
          <Input
            placeholder=""
            className="block w-full h-40 break-before-auto bg-white"
            ref={contentRef}
          ></Input>
          <Button
            className={`mt-6 py-2 ${acceptable ? 'border-green-300' : ''}`}
            type="submit"
          >
            <IconCheck
              className={acceptable ? 'text-green-500' : 'text-gray-300'}
            />
          </Button>
          <Button
            className="border-red-300 py-2 ml-4"
            onClick={backNavigate}
            type="button"
          >
            <IconCancel className="text-red-400" />
          </Button>
        </form>
      </div>
    </div>
  )
}

export default AddTask
