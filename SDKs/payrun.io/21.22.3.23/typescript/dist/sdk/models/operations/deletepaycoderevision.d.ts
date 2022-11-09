import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeletePayCodeRevisionPathParams extends SpeakeasyBase {
    effectiveDate: Date;
    employerId: string;
    payCodeId: string;
}
export declare class DeletePayCodeRevisionHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeletePayCodeRevisionRequest extends SpeakeasyBase {
    pathParams: DeletePayCodeRevisionPathParams;
    headers: DeletePayCodeRevisionHeaders;
}
export declare class DeletePayCodeRevisionResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
