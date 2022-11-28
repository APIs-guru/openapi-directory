import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetHolidaySchemeRevisionByNumberPathParams extends SpeakeasyBase {
    employerId: string;
    holidaySchemeId: string;
    revisionNumber: string;
}
export declare class GetHolidaySchemeRevisionByNumberHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetHolidaySchemeRevisionByNumberRequest extends SpeakeasyBase {
    pathParams: GetHolidaySchemeRevisionByNumberPathParams;
    headers: GetHolidaySchemeRevisionByNumberHeaders;
}
export declare class GetHolidaySchemeRevisionByNumberResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    holidayScheme?: shared.HolidayScheme;
    statusCode: number;
}
