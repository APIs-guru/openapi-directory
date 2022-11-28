import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEmployerJobsPathParams extends SpeakeasyBase {
    employerId: string;
}
export declare class GetEmployerJobsHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetEmployerJobsRequest extends SpeakeasyBase {
    pathParams: GetEmployerJobsPathParams;
    headers: GetEmployerJobsHeaders;
}
export declare class GetEmployerJobsResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    getEmployerJobs200ApplicationJsonBinaryString?: Uint8Array;
    statusCode: number;
}
