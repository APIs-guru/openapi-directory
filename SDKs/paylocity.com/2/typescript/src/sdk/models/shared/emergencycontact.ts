import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EmergencyContact
/** 
 * The emergency contact model
**/
export class EmergencyContact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address1" })
  address1?: string;

  @SpeakeasyMetadata({ data: "json, name=address2" })
  address2?: string;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=county" })
  county?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName: string;

  @SpeakeasyMetadata({ data: "json, name=homePhone" })
  homePhone?: string;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName: string;

  @SpeakeasyMetadata({ data: "json, name=mobilePhone" })
  mobilePhone?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=pager" })
  pager?: string;

  @SpeakeasyMetadata({ data: "json, name=primaryPhone" })
  primaryPhone?: string;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: string;

  @SpeakeasyMetadata({ data: "json, name=relationship" })
  relationship?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=syncEmployeeInfo" })
  syncEmployeeInfo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=workExtension" })
  workExtension?: string;

  @SpeakeasyMetadata({ data: "json, name=workPhone" })
  workPhone?: string;

  @SpeakeasyMetadata({ data: "json, name=zip" })
  zip?: string;
}
