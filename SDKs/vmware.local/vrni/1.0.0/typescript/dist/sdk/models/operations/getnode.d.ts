import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNodePathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetNodeSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetNodeRequest extends SpeakeasyBase {
    pathParams: GetNodePathParams;
    security: GetNodeSecurity;
}
export declare class GetNodeResponse extends SpeakeasyBase {
    contentType: string;
    node?: shared.Node;
    statusCode: number;
}
