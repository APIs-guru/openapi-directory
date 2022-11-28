import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteCisLineTypePathParams extends SpeakeasyBase {
    cisLineTypeId: string;
    employerId: string;
}
export declare class DeleteCisLineTypeHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeleteCisLineTypeRequest extends SpeakeasyBase {
    pathParams: DeleteCisLineTypePathParams;
    headers: DeleteCisLineTypeHeaders;
}
export declare class DeleteCisLineTypeResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
