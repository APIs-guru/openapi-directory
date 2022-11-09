import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EmergencyContact
/** 
 * The emergency contact model
**/
export class EmergencyContact extends SpeakeasyBase {
  @Metadata({ data: "json, name=address1" })
  address1?: string;

  @Metadata({ data: "json, name=address2" })
  address2?: string;

  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=county" })
  county?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=firstName" })
  firstName: string;

  @Metadata({ data: "json, name=homePhone" })
  homePhone?: string;

  @Metadata({ data: "json, name=lastName" })
  lastName: string;

  @Metadata({ data: "json, name=mobilePhone" })
  mobilePhone?: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=pager" })
  pager?: string;

  @Metadata({ data: "json, name=primaryPhone" })
  primaryPhone?: string;

  @Metadata({ data: "json, name=priority" })
  priority?: string;

  @Metadata({ data: "json, name=relationship" })
  relationship?: string;

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=syncEmployeeInfo" })
  syncEmployeeInfo?: boolean;

  @Metadata({ data: "json, name=workExtension" })
  workExtension?: string;

  @Metadata({ data: "json, name=workPhone" })
  workPhone?: string;

  @Metadata({ data: "json, name=zip" })
  zip?: string;
}
