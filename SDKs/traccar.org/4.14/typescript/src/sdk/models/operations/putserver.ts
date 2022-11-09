import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutServerRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Server;
}


export class PutServerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  server?: shared.Server;

  @Metadata()
  statusCode: number;
}
