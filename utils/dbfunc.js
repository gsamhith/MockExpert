import { db } from './db';
import { UserAnswer } from './schema';

export async function getEmailAndRatings() {
    const result = await db.select({
        userEmail: UserAnswer.userEmail,
        rating: UserAnswer.rating,
    })
    .from(UserAnswer)
    .orderBy(UserAnswer.rating.desc());

    return result;
}
