import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEventsEventIdOverviewPathParams extends SpeakeasyBase {
    eventId: string;
}
export declare class GetEventsEventIdOverviewRequest extends SpeakeasyBase {
    pathParams: GetEventsEventIdOverviewPathParams;
}
export declare class GetEventsEventIdOverviewResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    overviewEvent?: shared.OverviewEvent;
    statusCode: number;
}
