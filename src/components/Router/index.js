// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// // import App from "../../App"
// import { ChatList } from '../ChatList';
// import { MessageField } from '../MessageField';
// import {useParams} from "react-router";
// import { Layout } from '../Layout';

import {
    Routes,
    Route,
}  from 'react-router-dom'

import {HomePage} from '../../pages/HomePage';
import {ChatPage} from '../../pages/ChatPage';
import {ProfilePage} from '../../pages/ProfilePage';
import {NotFoundPage} from '../../pages/NotFoundPage';
import {Layout} from '../Layout';
import {MessageField} from '../MessageField'


export const Router=()=>{
    return(
        <>
        <Routes>
            <Route path="/" element ={<Layout />}>
                <Route index element={<HomePage />}/>
                <Route path="profile" element={<ProfilePage/>}/>
                <Route path="chat" element={<ChatPage/>}>
                    {/* <Route index element={<span>Please select a chat</span>} /> */}
                    <Route path=':chatId' element={<MessageField/>} />
                </Route>
                <Route path="*" element={<NotFoundPage/>}/>
            </Route>
        </Routes>
        </>


        // <BrowserRouter>
        //     <Box sx={{ flexGrow: 1 }}>
        //         <AppBar position="static">
        //             <Toolbar>
        //                 <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        //                     <Link to="/">Home</Link>
        //                 </Typography>
        //                 <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        //                     <Link to="/chats">Layout</Link>
        //                 </Typography>
        //                 <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        //                     <Link to="/profile">Profile</Link>
        //                 </Typography>
        //             </Toolbar>
        //         </AppBar>
        //     </Box>
       
        //     <Routes>
        //         <Route path="/" element={<Home />}></Route>
        //         <Route  path='/chats' element={<Layout/>}/>
        //         {/* <Route path="chats" element={<ChatList />}>
                     
        //             <Route path=":chatId" element={<MessageField/>}/> 
        //         </Route> */}
        //         {/* <Route path="/profile" element={<App />}></Route> */}
        //     </Routes>
        // </BrowserRouter>
    )
}

