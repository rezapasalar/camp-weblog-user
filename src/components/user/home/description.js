import PageWrap from '../../global/wraps/page'

export default function Description () {
    return (
        <div className="bg-pattern-light dark:bg-pattern-dark bg-size-600 bg-gray-200 dark:bg-gray-800 mt-[3rem] h-64">
            <PageWrap className="flex justify-center items-center h-full">
                <p className="text-2xl md:text-3xl text-center text-gray-500 dark:text-gray-100 px-10">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>
            </PageWrap>
        </div>
    )
}