import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AddClientSecretSecurity extends SpeakeasyBase {
    paylocityAuth: shared.SchemePaylocityAuth;
}
export declare class AddClientSecretRequest extends SpeakeasyBase {
    request: shared.AddClientSecret;
    security: AddClientSecretSecurity;
}
export declare class AddClientSecretResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    clientCredentialsResponses?: shared.ClientCredentialsResponse[];
    errors?: shared.Error[];
}
