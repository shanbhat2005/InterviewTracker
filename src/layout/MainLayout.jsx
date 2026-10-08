import React from 'react'
import IntroSection from '../components/IntroSection'
import StatsRow from '../components/StatsRow'
import AddQuestionForm from '../components/AddQuestionForm'
import SearchQuestionForm from '../components/SearchQuestionForm'

const MainLayout = () => {
  return (
    <div className="flex flex-col gap-6">
      <IntroSection />
      <StatsRow />
      <AddQuestionForm />
      <SearchQuestionForm />
    </div>
  )
}

export default MainLayout
