import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutNominalCodePathParams extends SpeakeasyBase {
    employerId: string;
    nominalCodeId: string;
}
export declare class PutNominalCodeHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PutNominalCodeRequest extends SpeakeasyBase {
    pathParams: PutNominalCodePathParams;
    headers: PutNominalCodeHeaders;
    request: shared.NominalCode;
}
export declare class PutNominalCodeResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    nominalCode?: shared.NominalCode;
    statusCode: number;
}
