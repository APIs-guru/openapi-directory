import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostCommandsSendRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Command;
}


export class PostCommandsSendResponse extends SpeakeasyBase {
  @Metadata()
  command?: shared.Command;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
