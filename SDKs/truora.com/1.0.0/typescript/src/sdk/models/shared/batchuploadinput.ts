import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BatchUploadInputFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=file" })
  file: string;
}


// BatchUploadInput
/** 
 * Represents the parameters required to perform a batch upload
**/
export class BatchUploadInput extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=file", elemType: shared.BatchUploadInputFile })
  file: BatchUploadInputFile[];
}
