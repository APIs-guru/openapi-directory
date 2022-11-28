import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WhenAResponseIsReceivedRequest extends SpeakeasyBase {
    request: shared.SubscribeToEventBody;
}
export declare class WhenAResponseIsReceivedResponse extends SpeakeasyBase {
    contentType: string;
    eventSubscriptionsResponse?: shared.EventSubscriptionsResponse;
    statusCode: number;
}
