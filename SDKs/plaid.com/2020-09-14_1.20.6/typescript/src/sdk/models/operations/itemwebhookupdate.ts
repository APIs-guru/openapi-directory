import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ItemWebhookUpdateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ItemWebhookUpdateRequest;
}


export class ItemWebhookUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  itemWebhookUpdateResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
