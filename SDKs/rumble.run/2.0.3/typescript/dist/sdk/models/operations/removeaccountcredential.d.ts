import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class RemoveAccountCredentialPathParams extends SpeakeasyBase {
    credentialId: string;
}
export declare class RemoveAccountCredentialSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class RemoveAccountCredentialRequest extends SpeakeasyBase {
    pathParams: RemoveAccountCredentialPathParams;
    security: RemoveAccountCredentialSecurity;
}
export declare class RemoveAccountCredentialResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
