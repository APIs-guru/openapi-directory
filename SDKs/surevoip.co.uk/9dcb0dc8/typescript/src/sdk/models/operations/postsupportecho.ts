import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostSupportEchoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
