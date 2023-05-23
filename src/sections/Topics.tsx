import { EntrySchema } from '@/Details';
import Entry from '@/components/Entry';
import React from 'react'

const Topics = ({gamesList, topicTitle}: {gamesList: EntrySchema[], topicTitle: string}) => {
  return (
    <div className="w-full mt-20">
      <h2 className="titles mb-10">{topicTitle}</h2>
      <div className="grid sm:grid-cols-4 grid-cols-2 gap-2 mb-10">
        {gamesList.map((data, index) => (
          <Entry data={data} index={index} key={index}/>
        ))}
      </div>
    </div>
  )
}

export default Topics