import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RotateAccountOrganizationExportTokenPathParams extends SpeakeasyBase {
    orgId: string;
}
export declare class RotateAccountOrganizationExportTokenSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class RotateAccountOrganizationExportTokenRequest extends SpeakeasyBase {
    pathParams: RotateAccountOrganizationExportTokenPathParams;
    security: RotateAccountOrganizationExportTokenSecurity;
}
export declare class RotateAccountOrganizationExportTokenResponse extends SpeakeasyBase {
    contentType: string;
    organization?: shared.Organization;
    statusCode: number;
}
