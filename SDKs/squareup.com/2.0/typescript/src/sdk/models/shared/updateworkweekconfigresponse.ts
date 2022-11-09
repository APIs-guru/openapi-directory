import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { WorkweekConfig } from "./workweekconfig";


// UpdateWorkweekConfigResponse
/** 
 * The response to a request to update a `WorkweekConfig` object. The response contains
 * the updated `WorkweekConfig` object and might contain a set of `Error` objects if
 * the request resulted in errors.
**/
export class UpdateWorkweekConfigResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=workweek_config" })
  workweekConfig?: WorkweekConfig;
}
