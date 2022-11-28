import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostRenderSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  developerKey: shared.SchemeDeveloperKey;
}


export class PostRenderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.Edit;

  @SpeakeasyMetadata()
  security: PostRenderSecurity;
}


export class PostRenderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  queuedResponse?: shared.QueuedResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
