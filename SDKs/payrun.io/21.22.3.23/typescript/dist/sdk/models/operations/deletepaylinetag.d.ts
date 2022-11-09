import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeletePayLineTagPathParams extends SpeakeasyBase {
    employeeId: string;
    employerId: string;
    payLineId: string;
    tagId: string;
}
export declare class DeletePayLineTagHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeletePayLineTagRequest extends SpeakeasyBase {
    pathParams: DeletePayLineTagPathParams;
    headers: DeletePayLineTagHeaders;
}
export declare class DeletePayLineTagResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
