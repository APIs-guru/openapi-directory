import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LocalTax
/** 
 * The Local Tax model
**/
export class LocalTax extends SpeakeasyBase {
  @Metadata({ data: "json, name=exemptions" })
  exemptions?: number;

  @Metadata({ data: "json, name=exemptions2" })
  exemptions2?: number;

  @Metadata({ data: "json, name=filingStatus" })
  filingStatus?: string;

  @Metadata({ data: "json, name=residentPSD" })
  residentPsd?: string;

  @Metadata({ data: "json, name=taxCode" })
  taxCode?: string;

  @Metadata({ data: "json, name=workPSD" })
  workPsd?: string;
}
