import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutCisLineTypeIntoEmployerPathParams extends SpeakeasyBase {
    cisLineTypeId: string;
    employerId: string;
}
export declare class PutCisLineTypeIntoEmployerHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PutCisLineTypeIntoEmployerRequest extends SpeakeasyBase {
    pathParams: PutCisLineTypeIntoEmployerPathParams;
    headers: PutCisLineTypeIntoEmployerHeaders;
    request: shared.CisLineType;
}
export declare class PutCisLineTypeIntoEmployerResponse extends SpeakeasyBase {
    cisLineType?: shared.CisLineType;
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
