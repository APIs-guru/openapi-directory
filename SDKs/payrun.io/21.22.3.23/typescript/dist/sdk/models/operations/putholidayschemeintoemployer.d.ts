import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PutHolidaySchemeIntoEmployerPathParams extends SpeakeasyBase {
    employerId: string;
    holidaySchemeId: string;
}
export declare class PutHolidaySchemeIntoEmployerHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PutHolidaySchemeIntoEmployerRequest extends SpeakeasyBase {
    pathParams: PutHolidaySchemeIntoEmployerPathParams;
    headers: PutHolidaySchemeIntoEmployerHeaders;
    request: shared.HolidayScheme;
}
export declare class PutHolidaySchemeIntoEmployerResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    holidayScheme?: shared.HolidayScheme;
    statusCode: number;
}
