import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkweekConfig } from "./workweekconfig";


// UpdateWorkweekConfigRequest
/** 
 * A request to update a `WorkweekConfig` object.
**/
export class UpdateWorkweekConfigRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=workweek_config" })
  workweekConfig: WorkweekConfig;
}
