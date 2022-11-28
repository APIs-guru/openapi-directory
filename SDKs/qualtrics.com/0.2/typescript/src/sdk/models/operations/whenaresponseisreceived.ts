import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class WhenAResponseIsReceivedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SubscribeToEventBody;
}


export class WhenAResponseIsReceivedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  eventSubscriptionsResponse?: shared.EventSubscriptionsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
