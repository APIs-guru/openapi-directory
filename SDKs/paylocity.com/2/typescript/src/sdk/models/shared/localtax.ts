import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LocalTax
/** 
 * The Local Tax model
**/
export class LocalTax extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exemptions" })
  exemptions?: number;

  @SpeakeasyMetadata({ data: "json, name=exemptions2" })
  exemptions2?: number;

  @SpeakeasyMetadata({ data: "json, name=filingStatus" })
  filingStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=residentPSD" })
  residentPsd?: string;

  @SpeakeasyMetadata({ data: "json, name=taxCode" })
  taxCode?: string;

  @SpeakeasyMetadata({ data: "json, name=workPSD" })
  workPsd?: string;
}
