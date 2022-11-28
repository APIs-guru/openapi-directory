import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Change } from "./change";



// ContinuousCheckEntry
/** 
 * Represents to changelog entry of a continuous check
**/
export class ContinuousCheckEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changes", elemType: Change })
  changes?: Change[];

  @SpeakeasyMetadata({ data: "json, name=check_id" })
  checkId?: string;

  @SpeakeasyMetadata({ data: "json, name=continuous_check_id" })
  continuousCheckId?: string;

  @SpeakeasyMetadata({ data: "json, name=creation_date" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=previous_check_id" })
  previousCheckId?: string;
}
