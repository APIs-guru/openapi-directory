import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Behavior
/** 
 * Represents behaviour reports
**/
export class Behavior extends SpeakeasyBase {
  @Metadata({ data: "json, name=birth_date" })
  birthDate: Date;

  @Metadata({ data: "json, name=country" })
  country: any;

  @Metadata({ data: "json, name=creation_date" })
  creationDate?: Date;

  @Metadata({ data: "json, name=document_id" })
  documentId: string;

  @Metadata({ data: "json, name=document_type" })
  documentType: any;

  @Metadata({ data: "json, name=email" })
  email: string;

  @Metadata({ data: "json, name=feedback_date" })
  feedbackDate: Date;

  @Metadata({ data: "json, name=first_name" })
  firstName: string;

  @Metadata({ data: "json, name=last_name" })
  lastName: string;

  @Metadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=reason" })
  reason: string;
}
