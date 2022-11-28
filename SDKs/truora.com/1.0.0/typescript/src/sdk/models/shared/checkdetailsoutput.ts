import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CheckDetails } from "./checkdetails";



// CheckDetailsOutput
/** 
 * Represents a list of background check details
**/
export class CheckDetailsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details", elemType: CheckDetails })
  details: CheckDetails[];

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: string;
}
