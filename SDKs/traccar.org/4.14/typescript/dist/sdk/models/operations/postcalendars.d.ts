import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostCalendarsRequest extends SpeakeasyBase {
    request: shared.Calendar;
}
export declare class PostCalendarsResponse extends SpeakeasyBase {
    calendar?: shared.Calendar;
    contentType: string;
    statusCode: number;
}
