import { Link, useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { mockNotices } from '../data/mockData'

export default function NoticeDetail() {
  const { id } = useParams()
  const notice = mockNotices.find((n) => n.id === id)

  if (!notice) {
    return (
      <>
        <PageHeader title="공지사항을 찾을 수 없습니다" />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <p className="text-navy-500 mb-6">요청하신 글이 존재하지 않거나 삭제되었습니다.</p>
          <Link
            to="/notices"
            className="inline-block px-6 py-3 bg-navy-900 hover:bg-navy-800 text-white rounded-lg transition-colors"
          >
            공지사항 목록으로
          </Link>
        </div>
      </>
    )
  }

  return (
    <>
      <PageHeader title="공지사항" />

      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <article className="bg-white">
          <header className="pb-6 mb-6 border-b-2 border-navy-900">
            <div className="flex items-center gap-3 mb-3">
              {notice.pinned && (
                <span className="inline-block text-xs font-bold text-accent bg-red-50 px-2.5 py-1 rounded">
                  공지
                </span>
              )}
              <span className="text-sm text-navy-400">{notice.createdAt}</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-navy-900">{notice.title}</h1>
          </header>

          <div className="text-navy-700 leading-relaxed whitespace-pre-line text-base">
            {notice.content}
          </div>

          <div className="mt-10 pt-6 border-t border-gray-100">
            <Link
              to="/notices"
              className="inline-block px-6 py-3 bg-navy-50 hover:bg-navy-100 text-navy-700 font-medium rounded-lg transition-colors"
            >
              목록으로
            </Link>
          </div>
        </article>
      </div>
    </>
  )
}
