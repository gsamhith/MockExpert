import { getEmailAndRatings } from '../../utils/dbfunc';

export default async function handler(req, res) {
    try {
        const data = await getEmailAndRatings();
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
