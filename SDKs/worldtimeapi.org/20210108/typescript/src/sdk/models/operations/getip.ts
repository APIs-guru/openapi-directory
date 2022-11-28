import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetIpResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dateTimeJsonResponse?: any;

  @SpeakeasyMetadata()
  errorJsonResponse?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
