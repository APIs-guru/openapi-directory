import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPortingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
