import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReviewObject
/** 
 * **object** containing a single user review
**/
export class ReviewObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ownerAvatarURL" })
  ownerAvatarUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=ownerCountry" })
  ownerCountry?: string;

  @SpeakeasyMetadata({ data: "json, name=ownerId" })
  ownerId?: number;

  @SpeakeasyMetadata({ data: "json, name=ownerName" })
  ownerName?: string;

  @SpeakeasyMetadata({ data: "json, name=productCode" })
  productCode?: string;

  @SpeakeasyMetadata({ data: "json, name=productTitle" })
  productTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=productUrlName" })
  productUrlName?: string;

  @SpeakeasyMetadata({ data: "json, name=publishedDate" })
  publishedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=rating" })
  rating?: number;

  @SpeakeasyMetadata({ data: "json, name=review" })
  review?: string;

  @SpeakeasyMetadata({ data: "json, name=reviewId" })
  reviewId?: number;

  @SpeakeasyMetadata({ data: "json, name=sortOrder" })
  sortOrder?: number;

  @SpeakeasyMetadata({ data: "json, name=sslSupported" })
  sslSupported?: boolean;

  @SpeakeasyMetadata({ data: "json, name=submissionDate" })
  submissionDate?: string;

  @SpeakeasyMetadata({ data: "json, name=viatorFeedback" })
  viatorFeedback?: string;

  @SpeakeasyMetadata({ data: "json, name=viatorNotes" })
  viatorNotes?: string;
}
