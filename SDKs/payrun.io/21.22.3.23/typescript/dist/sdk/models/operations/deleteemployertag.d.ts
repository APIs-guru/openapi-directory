import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteEmployerTagPathParams extends SpeakeasyBase {
    employerId: string;
    tagId: string;
}
export declare class DeleteEmployerTagHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeleteEmployerTagRequest extends SpeakeasyBase {
    pathParams: DeleteEmployerTagPathParams;
    headers: DeleteEmployerTagHeaders;
}
export declare class DeleteEmployerTagResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
