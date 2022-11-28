import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CompanyCodes
/** 
 * The Company Codes model
**/
export class CompanyCodes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;
}
