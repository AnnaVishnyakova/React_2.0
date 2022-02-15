import { Checkbox } from "@mui/material";
import { useDispatch, useSelector } from "react-redux"
import { changeShowName, CHANGE_NAME } from "../store/profile/action";
import {Form} from '../components/Form'

export const ProfilePage=()=>{
    const dispatch =useDispatch();
     const { showName, name } = useSelector((state) => state);
    
    const handleChangeShowName =()=>{
        dispatch(changeShowName)
        
    }

    const handleChangeName = (text) => {
        dispatch({
            type: CHANGE_NAME,
            payload: text,
        });
    };

    return (
        <div>
            <h1>Страница профиля</h1>
            <p>
               {showName && <span>{name}</span>}
            </p>
            <div>
        <span>Отобразить имя:</span>
        <Checkbox onClick={handleChangeShowName} />
        
      </div>
      <Form onSubmit={handleChangeName} />
        </div>
    )
}