import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WageSetting } from "./wagesetting";


// UpdateWageSettingRequest
/** 
 * Represents an update request for the `WageSetting` object describing a `TeamMember`.
**/
export class UpdateWageSettingRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=wage_setting" })
  wageSetting: WageSetting;
}
