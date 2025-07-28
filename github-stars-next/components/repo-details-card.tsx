'use client'
import { GitHubRepo } from '@/models/github-repo.model'
import { formatNumberWithK } from '@/utilities/format-number'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const RepoDetailsCard = ({ item }: { item: GitHubRepo }) => {
  return (
    <Link href={`/repo/${item.id}`} className=''>
        <div className='m-5 mb-2 bg-gray-200 rounded p-5'>
          <div className='p-1'>
              <p className='font-bold pb-3'>{item.name}</p>
              <p>{item.description}</p>
          </div>
          <div className='flex flex-row justify-between items-center mt-5'>
              <div className='flex flex-row items-center justify-center'>
                  <Image alt={item.owner.login} src={item.owner.avatar_url} height={30} width={30} className='rounded-full' />
                  <p style={{ marginLeft: 4 }}>{item.owner.login}</p>
              </div>
              <div className='flex flex-row items-center justify-center'>
                  <FontAwesomeIcon icon={faStar}/>
                  <p style={{ marginLeft: 4 }}>{formatNumberWithK(item.stargazers_count)}</p>
              </div>
          </div>
        </div>
    </Link>
  )
}

export default RepoDetailsCard