import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type FullInputPropsType = {
    callBack: (title: string) => void
}

export const FullInput = (props: FullInputPropsType) => {
    let [title, setTitle] = useState('');
    let [error, setError] = useState('')

    const addItem = () => {
        let newTitle = title.trim();
        if (newTitle !== '') {
            props.callBack(newTitle);
        } else {
            setError('Title is required');
        }
        setTitle('');
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setError('')
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addItem();
        }
    }

    const onClickHandler = () => {
        props.callBack(title);
        setTitle('');
    }

    return (
        <div>
            <input
                className={error? 'error' : ''}
                value={title}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}
            />
            <button onClick={onClickHandler}>+</button>
            {error
                ?<div className="error-message">{error}</div>
                : <div></div>
            }
        </div>
    );
};
