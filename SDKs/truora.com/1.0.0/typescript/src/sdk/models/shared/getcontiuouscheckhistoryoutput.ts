import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Change } from "./change";



// GetContiuousCheckHistoryOutput
/** 
 * GetContiuousCheckHistoryOutput
**/
export class GetContiuousCheckHistoryOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=history", elemType: Change })
  history: Change[];

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: string;
}
