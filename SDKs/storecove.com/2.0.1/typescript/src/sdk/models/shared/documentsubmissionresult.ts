import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DocumentSubmissionResult
/** 
 * The result of a document submission
**/
export class DocumentSubmissionResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=guid" })
  guid?: string;
}
