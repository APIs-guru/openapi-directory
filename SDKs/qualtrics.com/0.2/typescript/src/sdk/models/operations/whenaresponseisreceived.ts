import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class WhenAResponseIsReceivedRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SubscribeToEventBody;
}


export class WhenAResponseIsReceivedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  eventSubscriptionsResponse?: shared.EventSubscriptionsResponse;

  @Metadata()
  statusCode: number;
}
