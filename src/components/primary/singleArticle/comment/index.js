import { useState } from 'react'
import CommentForm from './form'
import ListComments from './list'
import Button from '../../../global/elements/button'

export default function Comment () {

    const [isShowForm, setIsShowForm] = useState(false)

    return (
        <div className="bg-white dark:bg-gray-800 md:rounded-xl p-4 md:p-5 space-y-5 shadow-xl mt-5">

            <div className="md:flex items-center justify-between space-y-3">
                <h4 className="text-gray-600 dark:text-gray-300 text-xl font-semibold">دیدگاه و پرسش</h4>
                <Button onClick={() => setIsShowForm(true)} className="w-full md:w-auto">+ دیدگاه و پرسش جدید</Button>
            </div>

            <CommentForm isShowForm={isShowForm} setIsShowForm={setIsShowForm} />
            <ListComments />
        </div>
    )
}