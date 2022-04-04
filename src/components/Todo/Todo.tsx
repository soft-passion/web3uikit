import React, { useEffect, useState } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import { Tag } from '../Tag';
import { DivStyled, DivStyledContent, SectionStyled } from './Todo.styles';
import { TodoProps, TodoState } from './types';

const Todo: React.FC<TodoProps> = ({
    buttonText = 'Add',
    fullWidth = false,
    label,
    onAdd,
    pattern,
    todos = [],
}) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [lists, setLists] = useState<TodoState[]>([]);

    useEffect(() => {
        if (Array.isArray(todos) && todos?.length > 0) {
            setLists([...todos]);
        }
    }, [todos]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const onCancelClick = (id: number) => {
        setLists(lists.filter((todo: TodoState) => todo.id !== id));
    };

    const addTodo = () => {
        const check = onAdd?.() || true;
        if (check) {
            const todo = {
                id: Date.now(),
                text: inputValue,
            };
            setLists((prevTodo) => [...prevTodo, todo]);
            setInputValue('');
        }
    };

    return (
        <SectionStyled data-testid="test-todo">
            <DivStyled>
                <Input
                    label={label}
                    size="large"
                    validation={{
                        regExp: pattern,
                    }}
                    onChange={handleInputChange}
                />
                <Button
                    theme="primary"
                    size="large"
                    text={buttonText}
                    icon="plus"
                    disabled={!inputValue}
                    onClick={addTodo}
                />
            </DivStyled>

            <DivStyledContent fullWidth={fullWidth} data-testid="test-todo_content">
                {lists.map(({ id, text }) => (
                    <Tag
                        key={id}
                        color="blueLight"
                        text={text}
                        onCancelClick={() => onCancelClick(id)}
                        hasCancel
                    />
                ))}
            </DivStyledContent>
        </SectionStyled>
    );
};

export default Todo;
