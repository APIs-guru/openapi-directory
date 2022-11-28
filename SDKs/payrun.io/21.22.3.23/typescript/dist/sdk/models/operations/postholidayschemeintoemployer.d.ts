import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostHolidaySchemeIntoEmployerPathParams extends SpeakeasyBase {
    employerId: string;
}
export declare class PostHolidaySchemeIntoEmployerHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PostHolidaySchemeIntoEmployerRequest extends SpeakeasyBase {
    pathParams: PostHolidaySchemeIntoEmployerPathParams;
    headers: PostHolidaySchemeIntoEmployerHeaders;
    request: shared.HolidayScheme;
}
export declare class PostHolidaySchemeIntoEmployerResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    link?: shared.Link;
    statusCode: number;
}
