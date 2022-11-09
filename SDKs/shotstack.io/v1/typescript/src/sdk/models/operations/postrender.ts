import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostRenderSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  developerKey: shared.SchemeDeveloperKey;
}


export class PostRenderRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Edit;

  @Metadata()
  security: PostRenderSecurity;
}


export class PostRenderResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  queuedResponse?: shared.QueuedResponse;

  @Metadata()
  statusCode: number;
}
