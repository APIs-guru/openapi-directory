import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEventsEventIdParametersPathParams extends SpeakeasyBase {
    eventId: string;
}
export declare class GetEventsEventIdParametersRequest extends SpeakeasyBase {
    pathParams: GetEventsEventIdParametersPathParams;
}
export declare class GetEventsEventIdParametersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    eventParameterInfos?: shared.EventParameterInfo[];
    statusCode: number;
}
