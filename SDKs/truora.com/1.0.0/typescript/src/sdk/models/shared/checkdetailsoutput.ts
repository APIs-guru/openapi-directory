import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CheckDetails } from "./checkdetails";


// CheckDetailsOutput
/** 
 * Represents a list of background check details
**/
export class CheckDetailsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=details", elemType: shared.CheckDetails })
  details: CheckDetails[];

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=self" })
  self: string;
}
