import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCalendarsQueryParams extends SpeakeasyBase {
    all?: boolean;
    userId?: number;
}
export declare class GetCalendarsRequest extends SpeakeasyBase {
    queryParams: GetCalendarsQueryParams;
}
export declare class GetCalendarsResponse extends SpeakeasyBase {
    calendars?: shared.Calendar[];
    contentType: string;
    statusCode: number;
}
