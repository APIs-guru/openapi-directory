import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetHolidaySchemeByEffectiveDatePathParams extends SpeakeasyBase {
    effectiveDate: Date;
    employerId: string;
    holidaySchemeId: string;
}
export declare class GetHolidaySchemeByEffectiveDateHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetHolidaySchemeByEffectiveDateRequest extends SpeakeasyBase {
    pathParams: GetHolidaySchemeByEffectiveDatePathParams;
    headers: GetHolidaySchemeByEffectiveDateHeaders;
}
export declare class GetHolidaySchemeByEffectiveDateResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    holidayScheme?: shared.HolidayScheme;
    statusCode: number;
}
