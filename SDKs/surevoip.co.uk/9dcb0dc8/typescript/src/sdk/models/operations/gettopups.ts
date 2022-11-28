import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTopupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
