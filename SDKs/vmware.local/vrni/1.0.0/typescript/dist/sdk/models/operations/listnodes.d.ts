import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListNodesSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class ListNodesRequest extends SpeakeasyBase {
    security: ListNodesSecurity;
}
export declare class ListNodesResponse extends SpeakeasyBase {
    contentType: string;
    nodeListResult?: shared.NodeListResult;
    statusCode: number;
}
