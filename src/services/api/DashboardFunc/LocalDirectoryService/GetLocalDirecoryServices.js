


export function GetLocalDirectoryServices() {
    
  return [
    {
        name: 'Local Directory Service #1',
        cpuUsage: '10%',
        memoryUsage: '20%',
        localServices: [
            { name: 'Service #1' },
            { name: 'Service #2' },
        ]
    },
    {
        name: 'Local Directory Service #2',
        cpuUsage: '15%',
        memoryUsage: '25%',
        localServices: [
            { name: 'Service #1' },
            { name: 'Service #2' }
        ]
    },
    {
        name: 'Local Directory Service #3',
        cpuUsage: '20%',
        memoryUsage: '30%',
        localServices: [
            { name: 'Service #1' },
            { name: 'Service #2' }
        ]
    }
];
  
}

export default GetLocalDirectoryServices;