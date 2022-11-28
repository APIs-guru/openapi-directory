import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetReportsEventsQueryParams extends SpeakeasyBase {
    deviceId?: number[];
    from: Date;
    groupId?: number[];
    to: Date;
    type?: string[];
}
export declare class GetReportsEventsRequest extends SpeakeasyBase {
    queryParams: GetReportsEventsQueryParams;
}
export declare class GetReportsEventsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    events?: shared.Event[];
    statusCode: number;
}
