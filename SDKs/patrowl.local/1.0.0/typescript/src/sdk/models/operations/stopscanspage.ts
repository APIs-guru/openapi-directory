import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopScansPageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiResponse?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
