import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateAccountKeySecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class CreateAccountKeyRequest extends SpeakeasyBase {
    request: shared.ApiKeyOptions;
    security: CreateAccountKeySecurity;
}
export declare class CreateAccountKeyResponse extends SpeakeasyBase {
    apiKey?: shared.ApiKey;
    contentType: string;
    statusCode: number;
}
