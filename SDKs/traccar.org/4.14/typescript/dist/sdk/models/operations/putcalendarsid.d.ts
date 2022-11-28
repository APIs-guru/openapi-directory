import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutCalendarsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PutCalendarsIdRequest extends SpeakeasyBase {
    pathParams: PutCalendarsIdPathParams;
    request: shared.Calendar;
}
export declare class PutCalendarsIdResponse extends SpeakeasyBase {
    calendar?: shared.Calendar;
    contentType: string;
    statusCode: number;
}
