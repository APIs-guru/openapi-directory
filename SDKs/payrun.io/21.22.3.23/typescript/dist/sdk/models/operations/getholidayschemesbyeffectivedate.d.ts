import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetHolidaySchemesByEffectiveDatePathParams extends SpeakeasyBase {
    effectiveDate: Date;
    employerId: string;
}
export declare class GetHolidaySchemesByEffectiveDateHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetHolidaySchemesByEffectiveDateRequest extends SpeakeasyBase {
    pathParams: GetHolidaySchemesByEffectiveDatePathParams;
    headers: GetHolidaySchemesByEffectiveDateHeaders;
}
export declare class GetHolidaySchemesByEffectiveDateResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
