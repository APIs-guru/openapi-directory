import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteAccountOrganizationExportTokenPathParams extends SpeakeasyBase {
    orgId: string;
}
export declare class DeleteAccountOrganizationExportTokenSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class DeleteAccountOrganizationExportTokenRequest extends SpeakeasyBase {
    pathParams: DeleteAccountOrganizationExportTokenPathParams;
    security: DeleteAccountOrganizationExportTokenSecurity;
}
export declare class DeleteAccountOrganizationExportTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
