import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteCisLineTypeTagPathParams extends SpeakeasyBase {
    cisLineTypeId: string;
    employerId: string;
    tagId: string;
}
export declare class DeleteCisLineTypeTagHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeleteCisLineTypeTagRequest extends SpeakeasyBase {
    pathParams: DeleteCisLineTypeTagPathParams;
    headers: DeleteCisLineTypeTagHeaders;
}
export declare class DeleteCisLineTypeTagResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
