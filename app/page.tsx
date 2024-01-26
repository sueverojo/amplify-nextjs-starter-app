// app/page.tsx
"use client";

import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import TodoList from "@/app/TodoList";

function App() {
    return (
        <>
            <h1>Hello, Amplify 👋</h1>
            <TodoList />
        </>
    );
}

export default withAuthenticator(App);
