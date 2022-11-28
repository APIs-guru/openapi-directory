import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPaySchedulesFromEmployerPathParams extends SpeakeasyBase {
    employerId: string;
}
export declare class GetPaySchedulesFromEmployerHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetPaySchedulesFromEmployerRequest extends SpeakeasyBase {
    pathParams: GetPaySchedulesFromEmployerPathParams;
    headers: GetPaySchedulesFromEmployerHeaders;
}
export declare class GetPaySchedulesFromEmployerResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
