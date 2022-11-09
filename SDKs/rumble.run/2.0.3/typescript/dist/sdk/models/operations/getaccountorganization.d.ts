import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAccountOrganizationPathParams extends SpeakeasyBase {
    orgId: string;
}
export declare class GetAccountOrganizationSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetAccountOrganizationRequest extends SpeakeasyBase {
    pathParams: GetAccountOrganizationPathParams;
    security: GetAccountOrganizationSecurity;
}
export declare class GetAccountOrganizationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
