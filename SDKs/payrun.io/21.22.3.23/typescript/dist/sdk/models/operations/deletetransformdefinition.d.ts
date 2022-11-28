import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteTransformDefinitionPathParams extends SpeakeasyBase {
    transformDefinitionId: string;
}
export declare class DeleteTransformDefinitionHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeleteTransformDefinitionRequest extends SpeakeasyBase {
    pathParams: DeleteTransformDefinitionPathParams;
    headers: DeleteTransformDefinitionHeaders;
}
export declare class DeleteTransformDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
