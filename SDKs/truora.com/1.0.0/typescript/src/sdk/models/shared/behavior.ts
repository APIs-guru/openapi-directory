import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Behavior
/** 
 * Represents behaviour reports
**/
export class Behavior extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=birth_date" })
  birthDate: Date;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country: any;

  @SpeakeasyMetadata({ data: "json, name=creation_date" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=document_id" })
  documentId: string;

  @SpeakeasyMetadata({ data: "json, name=document_type" })
  documentType: any;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=feedback_date" })
  feedbackDate: Date;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName: string;

  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason: string;
}
