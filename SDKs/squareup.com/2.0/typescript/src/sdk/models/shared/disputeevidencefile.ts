import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DisputeEvidenceFile
/** 
 * A file to be uploaded as dispute evidence.
**/
export class DisputeEvidenceFile extends SpeakeasyBase {
  @Metadata({ data: "json, name=filename" })
  filename?: string;

  @Metadata({ data: "json, name=filetype" })
  filetype?: string;
}
