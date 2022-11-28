import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSipResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
