import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StatusScansPageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiResponse?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
