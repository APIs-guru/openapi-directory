import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTransformDefinitionFromApplicationPathParams extends SpeakeasyBase {
    transformDefinitionId: string;
}
export declare class GetTransformDefinitionFromApplicationHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetTransformDefinitionFromApplicationRequest extends SpeakeasyBase {
    pathParams: GetTransformDefinitionFromApplicationPathParams;
    headers: GetTransformDefinitionFromApplicationHeaders;
}
export declare class GetTransformDefinitionFromApplicationResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    transformDefinition?: shared.TransformDefinition;
}
