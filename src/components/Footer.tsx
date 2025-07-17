"use client"
import React from 'react'
import { Github, Heart, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import { motion } from "framer-motion"
function Footer() {
  return (
    <footer className="w-full bg-[#101010]  py-12">
      <motion.div initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.7,
          ease: "easeInOut",
        }} className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Mriganka sarma
            </h3>
            <p className="text-gray-400 mb-6">Full Stack Developer </p>

            <div className="flex justify-center space-x-6">
              <Link
                href="www.github.com/mriganka528"
                className="w-10 h-10 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center hover:bg-purple-600 hover:border-purple-600 transition-colors duration-300"
              >
                <Github size={20} />
              </Link>
              <Link
                href={'https://www.linkedin.com/in/mriganka-sarma-987317231'}
                className="w-10 h-10 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-colors duration-300"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href={'https://x.com/Mrigank37161276'}
                className="w-10 h-10 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center hover:bg-blue-400 hover:border-blue-400 transition-colors duration-300"
              >
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 flex items-center justify-center gap-2">
              Made with <Heart className="text-red-500" size={16} /> by Mriganka Sarma
            </p>
            <p className="text-gray-500 text-sm mt-2">© 2024 All rights reserved.</p>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer
