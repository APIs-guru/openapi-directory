import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAccountKeysSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetAccountKeysRequest extends SpeakeasyBase {
    security: GetAccountKeysSecurity;
}
export declare class GetAccountKeysResponse extends SpeakeasyBase {
    apiKeys?: shared.ApiKey[];
    contentType: string;
    statusCode: number;
}
