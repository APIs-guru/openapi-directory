import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateAccountCredentialSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class CreateAccountCredentialRequest extends SpeakeasyBase {
    request: shared.CredentialOptions;
    security: CreateAccountCredentialSecurity;
}
export declare class CreateAccountCredentialResponse extends SpeakeasyBase {
    contentType: string;
    credential?: shared.Credential;
    statusCode: number;
}
