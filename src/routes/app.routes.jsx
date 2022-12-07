import { Routes, Route } from 'react-router-dom'
import { Details } from '../pages/Details'
import { MovieDescription } from '../pages/MovieDescription'
import { NewMovie } from '../pages/NewMovie'
import { Profile } from '../pages/Profile'

export function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Details/>}/>
            <Route path='/moviedescription/:id' element={<MovieDescription/>}/>
            <Route path='/newmovie' element={<NewMovie/>}/>
            <Route path='/profile' element={<Profile/>}/>
        </Routes>
    )
}