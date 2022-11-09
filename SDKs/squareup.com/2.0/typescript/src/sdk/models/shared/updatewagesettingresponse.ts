import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { WageSetting } from "./wagesetting";


// UpdateWageSettingResponse
/** 
 * Represents a response from an update request containing the updated `WageSetting` object
 * or error messages.
**/
export class UpdateWageSettingResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=wage_setting" })
  wageSetting?: WageSetting;
}
