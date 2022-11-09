import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetHolidaySchemesFromEmployerPathParams extends SpeakeasyBase {
    employerId: string;
}
export declare class GetHolidaySchemesFromEmployerHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetHolidaySchemesFromEmployerRequest extends SpeakeasyBase {
    pathParams: GetHolidaySchemesFromEmployerPathParams;
    headers: GetHolidaySchemesFromEmployerHeaders;
}
export declare class GetHolidaySchemesFromEmployerResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
