import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RatingCounts
/** 
 * **dictionary** of rating (stars) to number of reviews with each rating for *this* product"
 * 
 * users rate products by assigning a star-rating from 1-5; these values show the total number of reviews for each of the star ratings (up to a maximum given in the `reviewCount` field in this response)
 * 
 * - **note**: see response sample for structure
 * 
**/
export class RatingCounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=1" })
  one?: number;

  @SpeakeasyMetadata({ data: "json, name=2" })
  two?: number;

  @SpeakeasyMetadata({ data: "json, name=3" })
  three?: number;

  @SpeakeasyMetadata({ data: "json, name=4" })
  four?: number;

  @SpeakeasyMetadata({ data: "json, name=5" })
  five?: number;
}
