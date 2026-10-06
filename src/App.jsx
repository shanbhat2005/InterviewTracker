import React from 'react'
import Navbar from './components/NavBar'
import MainLayout from './layout/MainLayout'
import QuestionLayout from './layout/QuestionLayout'

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <MainLayout />
        <QuestionLayout />
      </main>
    </div>
  )
}

export default App
