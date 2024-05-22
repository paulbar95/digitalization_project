



export function GetLocalSessionServices() {
  return [
    {
        sessions: [
            { user: 'User1', accessedLDS: ['LDS #1', 'LDS #2'] },
            { user: 'User2', accessedLDS: ['LDS #1', 'LDS #3'] }
        ]
    },
    {
        sessions: [
            { user: 'User3', accessedLDS: ['LDS #1', 'LDS #2'] },
            { user: 'User4', accessedLDS: ['LDS #1', 'LDS #3'] },
            { user: 'User5', accessedLDS: ['LDS #2', 'LDS #3'] }
        ]
    }
  ]
} 

export default GetLocalSessionServices;