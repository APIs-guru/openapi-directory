import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CleanScansPageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiResponse?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
