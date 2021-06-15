import react, {FC} from 'react'
import {Button} from 'antd'

interface SharedButtonProps {
    text: string,
    onClick: any
}

const SharedButton: FC<SharedButtonProps> = (props) => {
    return(
        <div className="button-div">
             <Button
             onClick={props.onClick}
             type="primary"
             size="large"
             >
            {props.text}
             </Button>
        </div>
    )
}

export default SharedButton