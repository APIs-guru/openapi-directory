import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { WorkweekConfig } from "./workweekconfig";


// ListWorkweekConfigsResponse
/** 
 * The response to a request for a set of `WorkweekConfig` objects. The response contains
 * the requested `WorkweekConfig` objects and might contain a set of `Error` objects if
 * the request resulted in errors.
**/
export class ListWorkweekConfigsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=workweek_configs", elemType: shared.WorkweekConfig })
  workweekConfigs?: WorkweekConfig[];
}
