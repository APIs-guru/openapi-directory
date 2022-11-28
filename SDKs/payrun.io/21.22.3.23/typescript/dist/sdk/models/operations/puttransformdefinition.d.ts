import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutTransformDefinitionPathParams extends SpeakeasyBase {
    transformDefinitionId: string;
}
export declare class PutTransformDefinitionHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PutTransformDefinitionRequest extends SpeakeasyBase {
    pathParams: PutTransformDefinitionPathParams;
    headers: PutTransformDefinitionHeaders;
    request: shared.TransformDefinition;
}
export declare class PutTransformDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    transformDefinition?: shared.TransformDefinition;
}
