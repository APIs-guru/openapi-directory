import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetHolidaySchemeFromEmployerPathParams extends SpeakeasyBase {
    employerId: string;
    holidaySchemeId: string;
}
export declare class GetHolidaySchemeFromEmployerHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetHolidaySchemeFromEmployerRequest extends SpeakeasyBase {
    pathParams: GetHolidaySchemeFromEmployerPathParams;
    headers: GetHolidaySchemeFromEmployerHeaders;
}
export declare class GetHolidaySchemeFromEmployerResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    holidayScheme?: shared.HolidayScheme;
    statusCode: number;
}
