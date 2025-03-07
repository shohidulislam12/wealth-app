import { useState } from 'react';
import { toast } from 'sonner';

const useFetch = (cb) => {
    const [data, setData] = useState(undefined); // ✅ Use `useState` instead of `useFormState`
    const [loading, setLoading] = useState(false); // ✅ Use `false` instead of `null`
    const [error, setError] = useState(null);

    const fn = async (...args) => {
        setLoading(true);
        setError(null);
        try {
            const response = await cb(...args);
            setData(response); // ✅ Use `setData` instead of `setDate`
            setError(null);
        } catch (err) {
            setError(err);
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, fn, setData };
};

export default useFetch;
