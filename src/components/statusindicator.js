const StatusIndicator = ({ status }) => {
    const color = status === 'green' ? 'bg-green-500' : 'bg-red-500';
    return <span className={`h-4 w-4 rounded-full ${color} block`}></span>;
  };
  
  export default StatusIndicator;
  