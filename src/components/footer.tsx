'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand and description */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="font-bold text-xl text-gray-900">ClientsNext</h3>
                        <p className="mt-4 text-gray-600 text-sm">
                            Customized CRM experience for your unique journey.
                            Build stronger connections and nurture lasting client relationships.
                        </p>
                        {/* <div className="mt-6 flex space-x-4">
                            <a href="#" className="text-gray-500 hover:text-gray-800">
                                <Volleyball size={20} />
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-800">
                                <Volleyball size={20} />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-800">
                                <Volleyball size={20} />
                                <span className="sr-only">Twitter</span>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-800">
                                <Volleyball size={20} />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                        </div> */}
                    </div>

                    {/* Navigation 1 */}
                    <div>
                        <h3 className="font-medium text-gray-900">Product</h3>
                        <ul className="mt-4 space-y-2">
                            {["Features", "Pricing", "Case Studies", "Reviews", "Updates"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Navigation 2 */}
                    <div>
                        <h3 className="font-medium text-gray-900">Company</h3>
                        <ul className="mt-4 space-y-2">
                            {["About", "Team", "Careers", "Press", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="font-medium text-gray-900">Subscribe to our newsletter</h3>
                        <p className="mt-4 text-sm text-gray-600">
                            Get the latest updates and news delivered to your inbox.
                        </p>
                        <form className="mt-4 flex flex-col sm:flex-row gap-2">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-grow"
                                required
                            />
                            <Button type="submit" variant="outline" className="whitespace-nowrap">
                                Subscribe
                            </Button>
                        </form>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="border-t border-gray-200 py-6 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-600">
                        © {currentYear} CRM Platform. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                            Terms of Service
                        </Link>
                        <Link href='#' className="text-sm text-gray-600 hover:text-gray-900">
                            Cookies Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;