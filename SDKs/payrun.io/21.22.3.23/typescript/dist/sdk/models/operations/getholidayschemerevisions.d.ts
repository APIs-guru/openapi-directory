import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetHolidaySchemeRevisionsPathParams extends SpeakeasyBase {
    employerId: string;
    holidaySchemeId: string;
}
export declare class GetHolidaySchemeRevisionsHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetHolidaySchemeRevisionsRequest extends SpeakeasyBase {
    pathParams: GetHolidaySchemeRevisionsPathParams;
    headers: GetHolidaySchemeRevisionsHeaders;
}
export declare class GetHolidaySchemeRevisionsResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
