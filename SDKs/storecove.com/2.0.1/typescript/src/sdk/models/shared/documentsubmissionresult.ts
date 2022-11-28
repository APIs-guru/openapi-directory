import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DocumentSubmissionResult
/** 
 * The result of a document submission
**/
export class DocumentSubmissionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=guid" })
  guid?: string;
}
