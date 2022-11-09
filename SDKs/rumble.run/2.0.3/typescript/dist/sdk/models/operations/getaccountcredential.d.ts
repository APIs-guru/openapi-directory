import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAccountCredentialPathParams extends SpeakeasyBase {
    credentialId: string;
}
export declare class GetAccountCredentialSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetAccountCredentialRequest extends SpeakeasyBase {
    pathParams: GetAccountCredentialPathParams;
    security: GetAccountCredentialSecurity;
}
export declare class GetAccountCredentialResponse extends SpeakeasyBase {
    contentType: string;
    credential?: shared.Credential;
    statusCode: number;
}
