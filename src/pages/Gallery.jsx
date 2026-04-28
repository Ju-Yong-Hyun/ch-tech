import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import { mockGallery } from '../data/mockData'

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <>
      <PageHeader
        title="제작사진"
        description="현장에서 만들어지는 제작 과정과 작업 현장을 소개합니다"
      />

      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        {mockGallery.length === 0 ? (
          <div className="text-center text-navy-400 py-16">등록된 사진이 없습니다.</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {mockGallery.map((photo) => (
              <button
                key={photo.id}
                onClick={() => setLightbox(photo)}
                className="group aspect-square rounded-xl overflow-hidden bg-gray-100 relative"
              >
                <img
                  src={photo.url}
                  alt={photo.caption || ''}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {photo.caption && (
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-900/80 to-transparent p-3">
                    <span className="text-white text-sm font-medium">{photo.caption}</span>
                  </div>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center"
            aria-label="닫기"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
          <div className="max-w-5xl max-h-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.url} alt={lightbox.caption || ''} className="max-w-full max-h-[80vh] object-contain rounded-lg" />
            {lightbox.caption && (
              <p className="mt-4 text-white/90 text-sm">{lightbox.caption}</p>
            )}
          </div>
        </div>
      )}
    </>
  )
}
