export default async function handler(req:any, res:any) {
    if (req.method === 'POST') {      
      const { first_name, email, message, last_name, phone, city, state, country, pincode } = req.body;
      
      if (!first_name || !email || !message || !last_name || !phone || !city || !state || !country || !pincode) {
        return res.status(400).json({ error: 'All fields are required' });
      }
      console.log('Form submission received:', { first_name, email, message, last_name, phone, city, state, country, pincode });
  
      return res.status(200).json({ message: 'Message received successfully' });
    } else {return res.status(405).json({ error: 'Method not allowed' });
    }
  }
  