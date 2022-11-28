import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetInfoPageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiResponse?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
