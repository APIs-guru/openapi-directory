import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateBehaviorInput
/** 
 * Represents paramaters required to give behavior feedback
**/
export class CreateBehaviorInput extends SpeakeasyBase {
  @Metadata({ data: "form, name=birth_date;" })
  birthDate: Date;

  @Metadata({ data: "form, name=country;" })
  country: any;

  @Metadata({ data: "form, name=document_id;" })
  documentId: string;

  @Metadata({ data: "form, name=document_type;" })
  documentType: any;

  @Metadata({ data: "form, name=email;" })
  email: string;

  @Metadata({ data: "form, name=feedback_date;" })
  feedbackDate: Date;

  @Metadata({ data: "form, name=first_name;" })
  firstName: string;

  @Metadata({ data: "form, name=last_name;" })
  lastName: string;

  @Metadata({ data: "form, name=phone_number;" })
  phoneNumber?: string;

  @Metadata({ data: "form, name=reason;" })
  reason: any;
}
