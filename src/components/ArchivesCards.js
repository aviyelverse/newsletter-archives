import React from 'react'

const ArchivesCards = (props) => {
  return (
    <div className="relative flex flex-col items-center p-6 bg-white rounded-xl shadow-xl">
                  <a
                    href={props.newsletterLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-black">
                      Newsletter Issue #{props.issueNumber}
                    </h4>
                    <p className="text-gray-600 text-center">
                      Released Date:{props.issueDate}
                    </p>
                  </a>
                </div>
  )
}

export default ArchivesCards