import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Globe } from 'lucide-react'
import Image from 'next/image'
import F1Image from "../app/F1image.png"
import F2Image from "../app/F2image.png"
import F3Image from "../app/ClientRMimage.png"
import F4Image from "../app/salesPinelineImage.png"
import F5Image from "../app/ReminderImage.png"
import F6Image from '../app/RevenueImage.png'

export default function Features() {
    return (
        <section className="dark:bg-muted/25 bg-zinc-50 py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6 flex flex-col justify-center items-center">
                <h1 className='text-lg sm:text-2xl font-semibold '>Features</h1>
                <h1 className='text-2xl sm:text-5xl font-semibold'>Built to cover your needs</h1>
                <p className='text-muted-foreground text-sm text-center sm:text-lg my-2 mb-18'>Customized CRM experience for your unique journey.</p>
                <div className="mx-auto grid gap-2 sm:grid-cols-5">
                    <Card className="group overflow-hidden shadow-zinc-950/5 sm:col-span-3 sm:rounded-none sm:rounded-tl-xl">
                        <CardHeader>
                            <div className="md:p-6">
                                <p className="text-xl font-medium">Client Relationship Tracking</p>
                                <p className="text-muted-foreground mt-3 max-w-sm text-sm">Build stronger connections — track every interaction, note, and milestone to nurture lasting client relationships with ease and clarity.</p>
                            </div>
                        </CardHeader>

                        <div className="relative h-full pl-6 md:pl-12">
                            {/* <div className="absolute -inset-6 [background:radial-gradient(75%_95%_at_50%_0%,transparent,var(--color-background)_100%)]"></div> */}

                            <div className="bg-background overflow-hidden rounded-tl-lg border-l border-t pl-2 pt-2">
                                <Image
                                    src={F3Image}
                                    className="shadow dark:hidden"
                                    alt="payments illustration light"
                                    width={657}
                                    height={929}
                                />
                            </div>
                        </div>
                    </Card>

                    <Card className="group overflow-hidden shadow-zinc-950/5 sm:col-span-2 sm:rounded-none sm:rounded-tr-xl gap-2">
                        <p className="mx-auto mt-2 max-w-md text-balance px-6 text-center text-lg font-semibold sm:text-2xl md:pt-4">Advanced UX, Instantly Visualize Sales Pipelines.</p>
                        <p className='px-6 mb-4 mx-auto max-w-md text-muted-foreground text-sm text-center'>Navigate your deals with clarity — experience seamless, real-time pipeline visualization designed for speed, focus, and powerful sales execution.</p>

                        <CardContent className="mt-auto h-fit">
                            <div className="relative mb-6 sm:mb-0">
                                {/* <div className="absolute -inset-6 [background:radial-gradient(50%_75%_at_75%_50%,transparent,var(--color-background)_100%)]"></div> */}
                                <div className="aspect-76/59 overflow-hidden rounded-r-lg border">
                                    <Image
                                        src={F4Image}
                                        className="shadow dark:hidden"
                                        alt="payments illustration light"
                                        width={1207}
                                        height={929}
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="group overflow-hidden shadow-zinc-950/5 sm:col-span-2 sm:rounded-none sm:rounded-tr-xl gap-2">
                        <p className="mx-auto mt-2 max-w-md text-balance px-6 text-center text-lg font-semibold sm:text-2xl md:pt-4">Smart reminders & follow-ups</p>
                        <p className='px-6 mb-4 mx-auto max-w-md text-muted-foreground text-sm text-center'>Never miss a beat — stay on top of every client interaction with intelligent reminders and timely, automated follow-ups.</p>

                        <CardContent className="mt-auto h-fit">
                            <div className="relative mb-6 sm:mb-0">
                                {/* <div className="absolute -inset-6 [background:radial-gradient(50%_75%_at_75%_50%,transparent,var(--color-background)_100%)]"></div> */}
                                <div className="aspect-76/59 overflow-hidden rounded-r-lg border">
                                    <Image
                                        src={F5Image}
                                        className="shadow dark:hidden"
                                        alt="payments illustration light"
                                        width={1207}
                                        height={929}
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="group overflow-hidden shadow-zinc-950/5 sm:col-span-3 sm:rounded-none sm:rounded-tl-xl">
                        <CardHeader>
                            <div className="md:p-6">
                                <p className="text-xl font-medium">Simple analytics dashboard</p>
                                <p className="text-muted-foreground mt-3 max-w-sm text-sm">Effortlessly monitor performance, track key metrics, and gain instant insights with a clean, intuitive, and customizable analytics dashboard interface.</p>
                            </div>
                        </CardHeader>

                        <div className="relative h-full pl-6 md:pl-12">
                            {/* <div className="absolute -inset-6 [background:radial-gradient(75%_95%_at_50%_0%,transparent,var(--color-background)_100%)]"></div> */}

                            <div className="bg-background overflow-hidden rounded-tl-lg border-l border-t pl-2 pt-2">
                                <Image
                                    src={F6Image}
                                    className="shadow dark:hidden"
                                    alt="payments illustration light"
                                    width={657}
                                    height={929}
                                />
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    )
}