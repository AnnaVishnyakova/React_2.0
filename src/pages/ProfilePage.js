import { Checkbox } from "@mui/material";
import {
    shallowEqual,
    useDispatch,
    useSelector
} from "react-redux"
import { changeName, changeShowName } from "../store/profile/action";
import {Form} from '../components/Form'
import { selectName, selectShowName } from "../store/profile/selector.js";

export const ProfilePage=()=>{
    const dispatch =useDispatch();
    const showName = useSelector(selectShowName, shallowEqual);
    const name = useSelector(selectName);

    
    const handleChangeShowName =()=>{
        dispatch(changeShowName)
        
    }

    const handleChangeName = (text) => {
        dispatch(changeName(text));
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

