import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteEmployerRevisionPathParams extends SpeakeasyBase {
    effectiveDate: Date;
    employerId: string;
}
export declare class DeleteEmployerRevisionHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeleteEmployerRevisionRequest extends SpeakeasyBase {
    pathParams: DeleteEmployerRevisionPathParams;
    headers: DeleteEmployerRevisionHeaders;
}
export declare class DeleteEmployerRevisionResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
