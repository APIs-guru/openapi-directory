import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetEventPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetEventRequest extends SpeakeasyBase {
    pathParams: GetEventPathParams;
}
export declare class GetEventResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    events?: shared.Event[];
    statusCode: number;
}
