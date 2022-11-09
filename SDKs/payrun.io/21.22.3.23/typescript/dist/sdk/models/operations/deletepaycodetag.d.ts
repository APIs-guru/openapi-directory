import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeletePayCodeTagPathParams extends SpeakeasyBase {
    employerId: string;
    payCodeId: string;
    tagId: string;
}
export declare class DeletePayCodeTagHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeletePayCodeTagRequest extends SpeakeasyBase {
    pathParams: DeletePayCodeTagPathParams;
    headers: DeletePayCodeTagHeaders;
}
export declare class DeletePayCodeTagResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
