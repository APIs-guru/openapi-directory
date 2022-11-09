import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Change } from "./change";


// ContinuousCheckEntry
/** 
 * Represents to changelog entry of a continuous check
**/
export class ContinuousCheckEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=changes", elemType: shared.Change })
  changes?: Change[];

  @Metadata({ data: "json, name=check_id" })
  checkId?: string;

  @Metadata({ data: "json, name=continuous_check_id" })
  continuousCheckId?: string;

  @Metadata({ data: "json, name=creation_date" })
  creationDate?: Date;

  @Metadata({ data: "json, name=previous_check_id" })
  previousCheckId?: string;
}
