import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CompanyCodes
/** 
 * The Company Codes model
**/
export class CompanyCodes extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;
}
