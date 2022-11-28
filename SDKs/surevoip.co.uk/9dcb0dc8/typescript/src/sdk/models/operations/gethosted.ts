import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetHostedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
