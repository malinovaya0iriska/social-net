import React, {ChangeEvent, useEffect, useState} from "react";

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks: React.FC<ProfileStatusPropsType> = React.memo(({status, updateStatus}) =>{

    const [newStatus, setNewStatus] = useState<string>(status)
    const [editMode, setEditMode] = useState<boolean>(false)
    console.log('status render')

    useEffect(()=>{
        debugger
        setNewStatus(status)
    }, [status])
    const activateMode = () => {
        setEditMode(true)
    }
    const deactivateMode = () => {
        setEditMode(false)
        updateStatus(newStatus)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
            <div>
                    <span onDoubleClick={activateMode}>
                        {status || 'This is my status'}
                    </span>
            </div>
            }
            {editMode &&
            <div>
                <input onBlur={deactivateMode}
                       value={newStatus}
                       onChange={onStatusChange}
                       autoFocus={true}
                />
            </div>
            }
        </div>
    )
})