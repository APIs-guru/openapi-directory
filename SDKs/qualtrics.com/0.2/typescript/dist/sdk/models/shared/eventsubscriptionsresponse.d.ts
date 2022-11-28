import { SpeakeasyBase } from "../../../internal/utils";
export declare class EventSubscriptionsResponseMeta extends SpeakeasyBase {
    httpStatus?: string;
    requestId?: string;
}
export declare class EventSubscriptionsResponseResultMeta extends SpeakeasyBase {
    httpStatus?: string;
}
export declare class EventSubscriptionsResponseResultResult extends SpeakeasyBase {
    id?: string;
}
export declare class EventSubscriptionsResponseResult extends SpeakeasyBase {
    meta?: EventSubscriptionsResponseResultMeta;
    result?: EventSubscriptionsResponseResultResult;
}
export declare class EventSubscriptionsResponse extends SpeakeasyBase {
    meta?: EventSubscriptionsResponseMeta;
    result?: EventSubscriptionsResponseResult;
}
