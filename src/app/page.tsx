'use client'
import Header from '@/app/components/Header'
import { Button, Card, Table } from 'flowbite-react';
import ReactPlayer from 'react-player'

export default function MyPage() {
  return (
    <>
      <div className='w-full h-[100vh] '>
        <div className=' max-w-[70rem] flex flex-col mx-auto size-full'>
          <Header />
          <div className='h-full gap-x-7 flex justify-center items-start'>
            {/* <div className='flex flex-row gap-x-4'>
              <Button color="gray" size="lg">Join as a collaborator</Button>
              <Button color="blue" size="lg">Start show</Button>
            </div> */}
            <Card className="max-w-sm">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Your own show
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                No started show yet
              </p>
              <Button>Start</Button>

            </Card>
            <Card className="max-w-sm">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Shows you are already joined
              </h5>
              <Table>
                <Table.Body className="divide-y">
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      <input name="uuid" ></input>
                    </Table.Cell>
                    <Table.Cell>
                      <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                        Join
                      </a>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {'W6GT-76HB-88JK-LLF5"'}
                    </Table.Cell>
                    <Table.Cell>
                      <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                        Join
                      </a>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Card>
          </div>
        </div>

      </div>
    </>
  );
}