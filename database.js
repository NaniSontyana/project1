import pkg from 'pg'; 
const { Pool } = pkg; 

const pool = new Pool({
  user: 'postgres',       
  host: 'localhost',      
  database: 'mentimaps',  
  password: '123456',     
  port: 5433,             
});

// Function to run queries
export const query = async (text, params) => {
  try {
    const result = await pool.query(text, params);
    return result;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
};
