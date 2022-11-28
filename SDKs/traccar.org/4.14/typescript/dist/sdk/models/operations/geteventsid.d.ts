import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEventsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetEventsIdRequest extends SpeakeasyBase {
    pathParams: GetEventsIdPathParams;
}
export declare class GetEventsIdResponse extends SpeakeasyBase {
    contentType: string;
    event?: shared.Event;
    statusCode: number;
}
