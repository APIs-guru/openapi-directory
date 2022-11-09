import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteNominalCodePathParams extends SpeakeasyBase {
    employerId: string;
    nominalCodeId: string;
}
export declare class DeleteNominalCodeHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeleteNominalCodeRequest extends SpeakeasyBase {
    pathParams: DeleteNominalCodePathParams;
    headers: DeleteNominalCodeHeaders;
}
export declare class DeleteNominalCodeResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
