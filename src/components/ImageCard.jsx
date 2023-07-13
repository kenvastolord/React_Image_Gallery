import React from 'react'

export const ImageCard = ({ image }) => {
  const { id, webformatURL, user, tags, views, downloads, likes } = image;
  const tagsList = tags.split(',')
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={webformatURL} alt="image" className="w-full" />
        <div className="px-6 py-4">
          <div className="font-bold text-purple-500 text-xl mb-2">
            Photo by {user}
          </div>
          <ul>
            <li><strong>Views: </strong>{views}</li>
            <li><strong>Downloads: </strong>{downloads}</li>
            <li><strong>Likes: </strong>{likes}</li>
          </ul>
        </div>
        <div className="px-6 py-4">
          {tagsList.map((tag, index) => (
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-1" key={index}>#{tag}</span>
          ))}
        </div>
      </div>
    </>
  )
}
