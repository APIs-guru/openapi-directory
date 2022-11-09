import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostTransformDefinitionHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PostTransformDefinitionRequest extends SpeakeasyBase {
    headers: PostTransformDefinitionHeaders;
    request: shared.TransformDefinition;
}
export declare class PostTransformDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    link?: shared.Link;
    statusCode: number;
}
