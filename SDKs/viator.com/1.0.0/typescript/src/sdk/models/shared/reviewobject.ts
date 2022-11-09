import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReviewObject
/** 
 * **object** containing a single user review
**/
export class ReviewObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=ownerAvatarURL" })
  ownerAvatarUrl?: string;

  @Metadata({ data: "json, name=ownerCountry" })
  ownerCountry?: string;

  @Metadata({ data: "json, name=ownerId" })
  ownerId?: number;

  @Metadata({ data: "json, name=ownerName" })
  ownerName?: string;

  @Metadata({ data: "json, name=productCode" })
  productCode?: string;

  @Metadata({ data: "json, name=productTitle" })
  productTitle?: string;

  @Metadata({ data: "json, name=productUrlName" })
  productUrlName?: string;

  @Metadata({ data: "json, name=publishedDate" })
  publishedDate?: string;

  @Metadata({ data: "json, name=rating" })
  rating?: number;

  @Metadata({ data: "json, name=review" })
  review?: string;

  @Metadata({ data: "json, name=reviewId" })
  reviewId?: number;

  @Metadata({ data: "json, name=sortOrder" })
  sortOrder?: number;

  @Metadata({ data: "json, name=sslSupported" })
  sslSupported?: boolean;

  @Metadata({ data: "json, name=submissionDate" })
  submissionDate?: string;

  @Metadata({ data: "json, name=viatorFeedback" })
  viatorFeedback?: string;

  @Metadata({ data: "json, name=viatorNotes" })
  viatorNotes?: string;
}
