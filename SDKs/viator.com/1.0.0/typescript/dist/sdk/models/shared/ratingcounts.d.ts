import { SpeakeasyBase } from "../../../internal/utils";
/**
 * **dictionary** of rating (stars) to number of reviews with each rating for *this* product"
 *
 * users rate products by assigning a star-rating from 1-5; these values show the total number of reviews for each of the star ratings (up to a maximum given in the `reviewCount` field in this response)
 *
 * - **note**: see response sample for structure
 *
**/
export declare class RatingCounts extends SpeakeasyBase {
    one?: number;
    two?: number;
    three?: number;
    four?: number;
    five?: number;
}
