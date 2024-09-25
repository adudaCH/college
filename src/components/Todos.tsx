import { FunctionComponent, useEffect, useState } from "react";

// Custom Hook for fetching data
const useFetch = (url: string) => {
    const [data, setData] = useState<any>(null); // השתמש ב-<any> אם אינך יודע מראש את סוג המידע שיגיע
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                
                // אם התגובה לא תקינה, זרוק שגיאה
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                
                const result = await response.json();
                setData(result);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url]); // מתעדכן כש-url משתנה

    return { data, loading, error };
};

// Component for fetching and displaying the todos
const DataFetchingComponent: FunctionComponent = () => {
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos/14');

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="Todo">
            <h4 >Data:</h4>
            <pre className="bg-light">{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

// Define TodosProps interface
interface TodosProps {}

// Todos component that uses the DataFetchingComponent
const Todos: FunctionComponent<TodosProps> = () => {
    return (
        <>
            <h2 className="Todo">Todos</h2>
            <DataFetchingComponent />
        </>
    );
};

export default Todos;
