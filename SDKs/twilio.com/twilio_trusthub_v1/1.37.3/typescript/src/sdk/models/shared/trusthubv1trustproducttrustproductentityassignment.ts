import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TrusthubV1TrustProductTrustProductEntityAssignment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=object_sid" })
  objectSid?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=trust_product_sid" })
  trustProductSid?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
