import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPensionRevisionByNumberPathParams extends SpeakeasyBase {
    employerId: string;
    pensionId: string;
    revisionNumber: string;
}
export declare class GetPensionRevisionByNumberHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetPensionRevisionByNumberRequest extends SpeakeasyBase {
    pathParams: GetPensionRevisionByNumberPathParams;
    headers: GetPensionRevisionByNumberHeaders;
}
export declare class GetPensionRevisionByNumberResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    pension?: shared.Pension;
    statusCode: number;
}
