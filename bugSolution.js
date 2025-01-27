```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct implementation: Add count as a dependency to useEffect
    // The effect will only run once after initial render (because count is initialized to 0).
    // If count was modified from another event outside of this hook the useEffect would run again
    // correctly updating the UI accordingly.
    setCount(prevCount => prevCount + 1);
  }, [count]); // Add count as dependency

  return <div>Count: {count}</div>;
}
```