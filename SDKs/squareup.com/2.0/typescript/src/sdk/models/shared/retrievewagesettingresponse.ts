import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { WageSetting } from "./wagesetting";


// RetrieveWageSettingResponse
/** 
 * Represents a response from a retrieve request containing the specified `WageSetting` object or error messages.
**/
export class RetrieveWageSettingResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=wage_setting" })
  wageSetting?: WageSetting;
}
