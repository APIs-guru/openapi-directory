import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostSupportEchoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
