import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateBehaviorInput
/** 
 * Represents paramaters required to give behavior feedback
**/
export class CreateBehaviorInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=birth_date;" })
  birthDate: Date;

  @SpeakeasyMetadata({ data: "form, name=country;" })
  country: any;

  @SpeakeasyMetadata({ data: "form, name=document_id;" })
  documentId: string;

  @SpeakeasyMetadata({ data: "form, name=document_type;" })
  documentType: any;

  @SpeakeasyMetadata({ data: "form, name=email;" })
  email: string;

  @SpeakeasyMetadata({ data: "form, name=feedback_date;" })
  feedbackDate: Date;

  @SpeakeasyMetadata({ data: "form, name=first_name;" })
  firstName: string;

  @SpeakeasyMetadata({ data: "form, name=last_name;" })
  lastName: string;

  @SpeakeasyMetadata({ data: "form, name=phone_number;" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "form, name=reason;" })
  reason: any;
}
