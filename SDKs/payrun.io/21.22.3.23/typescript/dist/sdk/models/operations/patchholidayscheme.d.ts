import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PatchHolidaySchemePathParams extends SpeakeasyBase {
    employerId: string;
    holidaySchemeId: string;
}
export declare class PatchHolidaySchemeHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PatchHolidaySchemeRequest extends SpeakeasyBase {
    pathParams: PatchHolidaySchemePathParams;
    headers: PatchHolidaySchemeHeaders;
    request: shared.HolidayScheme;
}
export declare class PatchHolidaySchemeResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    holidayScheme?: shared.HolidayScheme;
    statusCode: number;
}
