import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSmsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
