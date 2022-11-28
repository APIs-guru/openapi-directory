import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BatchUploadInputFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=file" })
  file: string;
}


// BatchUploadInput
/** 
 * Represents the parameters required to perform a batch upload
**/
export class BatchUploadInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=file", elemType: BatchUploadInputFile })
  file: BatchUploadInputFile[];
}
