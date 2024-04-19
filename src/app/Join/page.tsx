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
                        <Card className="max-w-sm">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Shows you are already joined
                            </h5>
                            <Table>
                                <Table.Body className="divide-y">
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
                    <div className='h-full gap-x-7 flex justify-center items-start'>
                        <Card className="w-full">
                            <div className='w-full flex flex-row justify-between'>
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Enqued tracks
                                </h5>
                                <Button>+</Button>
                            </div>
                            <Table>
                                <Table.Body className="divide-y">
                                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            {'W6GT-76HB-88JK-LLF5"'}
                                        </Table.Cell>
                                        <Table.Cell>
                                            <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                                Remove
                                            </a>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            {'W6GT-76HB-88JK-LLF5"'}
                                        </Table.Cell>
                                        <Table.Cell>
                                            <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                                Remove
                                            </a>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            {'W6GT-76HB-88JK-LLF5"'}
                                        </Table.Cell>
                                        <Table.Cell>
                                            <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                                Remove
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