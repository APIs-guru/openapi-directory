import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetLivenessPageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
