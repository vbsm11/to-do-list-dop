import React, {ChangeEvent, useState} from 'react';

type EditableSpanPropsType = {
    title: string
    callBack: (title: string) => void
}

export const EditableSpan = (props: EditableSpanPropsType) => {
    let [newTitle, setNewTitle] = useState<string>(props.title);
    let [editMode, setEditMode] = useState<boolean>(false);

    const onEditMode = () => {
        setEditMode(true);
    }

    const offEditMode = () => {
        setEditMode(false);
        if (newTitle.trim()) {
            props.callBack(newTitle);
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value);
    }

    return (
        editMode
            ? <input
                value={newTitle}
                autoFocus
                onBlur={offEditMode}
                onChange={onChangeHandler}
            />
            : <span onDoubleClick={onEditMode}>
                {props.title}
            </span>
    )
}