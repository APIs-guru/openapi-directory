import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountCredentialsQueryParams extends SpeakeasyBase {
    search?: string;
}
export declare class GetAccountCredentialsSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetAccountCredentialsRequest extends SpeakeasyBase {
    queryParams: GetAccountCredentialsQueryParams;
    security: GetAccountCredentialsSecurity;
}
export declare class GetAccountCredentialsResponse extends SpeakeasyBase {
    contentType: string;
    credentials?: shared.Credential[];
    statusCode: number;
}
