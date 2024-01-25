import styles from './page.module.css'

import {Amplify} from 'aws-amplify';
import config from '@/amplifyconfiguration.json';

import {generateClient} from 'aws-amplify/data';
import {type Schema} from '@/amplify/data/resource'; // Path to your backend resource definition

Amplify.configure(config);

const client = generateClient<Schema>();

async function insert() {
    const {errors, data: newTodo} = await client.models.Todo.create({
        content: "My new todo",
        isDone: true,
    })
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
