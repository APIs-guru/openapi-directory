import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEmployerSecretsPathParams extends SpeakeasyBase {
    employerId: string;
}
export declare class GetEmployerSecretsHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetEmployerSecretsRequest extends SpeakeasyBase {
    pathParams: GetEmployerSecretsPathParams;
    headers: GetEmployerSecretsHeaders;
}
export declare class GetEmployerSecretsResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
