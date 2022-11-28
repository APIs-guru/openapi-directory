import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTestPageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
