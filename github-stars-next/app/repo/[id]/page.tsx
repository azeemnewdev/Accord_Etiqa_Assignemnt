"use client"
import { useRepoStore } from '@/store/useRepoStore';
import { formatNumberWithK } from '@/utilities/format-number';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image';
import { useParams } from 'next/navigation';

const RepoDetails = () => {
  const { id } = useParams();
  const repos = useRepoStore((state) => state.repos);

  const selectedRepo = repos.find(x => x.id.toString() === id);

  if (!selectedRepo) {
    return (
      <div className='items-center justify-center'>
        Loading...
      </div>
    )
  }

  return (
    <div className='items-center justify-center min-h-screen flex flex-col gap-4 p-4'>
        <div className='items-center justify-center py-10'>
          <Image alt={selectedRepo!.owner.login} src={selectedRepo!.owner.avatar_url} className='rounded-full' width={200} height={200} />
          <p className='font-bold text-3xl pt-5'>
            {selectedRepo?.owner.login}
          </p>
        </div>

        <div className=''>
          <div className='flex flex-row pb-5'>
            <p className='font-bold'>Repository Fullname</p>
            <p className='ml-2'>{selectedRepo?.full_name}</p>
          </div>
          
          <div className='flex flex-row space-x-2 pb-5'>
            <p className='font-bold'>Description</p>
            <p className='flex-shrink ml-2 text-start'>{selectedRepo?.description}</p>
          </div>

          <div className='flex flex-row space-x-2 pb-5'>
            <p className='font-bold'>Stars</p>
            <div className='flex flex-row ml-2 items-center justify-center'>
                <FontAwesomeIcon icon={faStar}/>
                <p style={{ marginLeft: 4 }}>{formatNumberWithK(selectedRepo!.stargazers_count)}</p>
            </div>
          </div>

          <div className='flex flex-row space-x-2 pb-5'>
            <div>
              <p className='font-bold'>Github Link</p>
            </div>
            <div className='flex flex-row ml-2'>
               <a
                href={selectedRepo!.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                <p className="text-blue-500 underline">Open in GitHub</p>
              </a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default RepoDetails