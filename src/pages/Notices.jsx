import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { mockNotices } from '../data/mockData'

export default function Notices() {
  const sorted = [...mockNotices].sort((a, b) => {
    if (a.pinned !== b.pinned) return a.pinned ? -1 : 1
    return b.createdAt.localeCompare(a.createdAt)
  })

  return (
    <>
      <PageHeader title="공지사항" description="씨에이치 테크의 새로운 소식을 안내합니다" />

      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        {sorted.length === 0 ? (
          <div className="text-center text-navy-400 py-16">등록된 공지사항이 없습니다.</div>
        ) : (
          <div className="border-t-2 border-navy-900">
            {sorted.map((notice) => (
              <Link
                key={notice.id}
                to={`/notices/${notice.id}`}
                className="flex items-center gap-4 px-4 py-5 border-b border-gray-100 hover:bg-navy-50 transition-colors"
              >
                {notice.pinned ? (
                  <span className="inline-block text-xs font-bold text-accent bg-red-50 px-2.5 py-1 rounded">
                    공지
                  </span>
                ) : (
                  <span className="inline-block text-xs font-medium text-navy-400 bg-gray-100 px-2.5 py-1 rounded">
                    일반
                  </span>
                )}
                <h3 className="flex-1 text-navy-800 font-medium truncate">{notice.title}</h3>
                <span className="text-sm text-navy-400 hidden sm:block">{notice.createdAt}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
