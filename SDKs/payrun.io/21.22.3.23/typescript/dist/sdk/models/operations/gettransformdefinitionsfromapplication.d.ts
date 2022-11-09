import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetTransformDefinitionsFromApplicationHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetTransformDefinitionsFromApplicationRequest extends SpeakeasyBase {
    headers: GetTransformDefinitionsFromApplicationHeaders;
}
export declare class GetTransformDefinitionsFromApplicationResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
