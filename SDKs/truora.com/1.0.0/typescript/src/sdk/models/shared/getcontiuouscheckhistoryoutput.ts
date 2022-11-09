import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Change } from "./change";


// GetContiuousCheckHistoryOutput
/** 
 * GetContiuousCheckHistoryOutput
**/
export class GetContiuousCheckHistoryOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=history", elemType: shared.Change })
  history: Change[];

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=self" })
  self?: string;
}
