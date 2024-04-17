import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectRoute from './components/auth/ProtectRoute'
import { LayoutLoader } from './components/layout/Loaders';

const Home = lazy(() => import('./pages/Home'));
const Chat = lazy(() => import('./pages/Chat'));
const Groups = lazy(() => import('./pages/Groups'));
const Login = lazy(() => import("./pages/Login"));
const NotFound = lazy(() => import("./pages/NotFound"));

let user = true;

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LayoutLoader />}>
        <Routes>
          <Route element={<ProtectRoute user={user} />}>
            <Route path='/' element={<Home />} />
            <Route path='/chat/:chatId' element={<Chat />} />
            <Route path='/groups' element={<Groups />} />
            <Route path='/about' element={<h1>About</h1>} />
          </Route>
          <Route path='/login' element={
            <ProtectRoute redirect='/' user={!user}>
              <Login />
            </ProtectRoute>
          } />
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App