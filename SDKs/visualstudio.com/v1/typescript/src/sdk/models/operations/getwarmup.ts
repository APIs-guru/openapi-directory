import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetWarmupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
