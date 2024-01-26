import styles from './page.module.css'

import {Amplify} from 'aws-amplify';
import config from '@/amplifyconfiguration.json';

import {generateClient} from 'aws-amplify/data';
import {type Schema} from '@/amplify/data/resource'; // Path to your backend resource definition



/*
"use client"
import { generateClient } from "aws-amplify/data";
import { type Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>


Amplify.configure(config);

const client = generateClient<Schema>();

async function insert() {
    try {
        const {errors, data: newTodo} = await client.models.Todo.create({
            content: "My new todo",
            isDone: true,
        })
        console.log("content: " + newTodo.content);

    } catch (err) {
        console.error('Error inserting todo:', err)
    }

    const {data: todos, errors: errors2} = await client.models.Todo.list();
    console.log(todos);

}

// Now you should be able to make CRUDL operations with the
// Data client
async function fetchTodos() {
    const {data: todos, errors} = await client.models.Todo.list();
    console.log(todos);
}

async function main() {
    console.log("antes")
    await insert().catch(console.error);
    await fetchTodos().catch(console.error);
    console.log("despues")
}

main();

export default function Home() {
    return (
        <main className={styles.main}>
            <h1>HELLO!</h1>

        </main>
    )
}
