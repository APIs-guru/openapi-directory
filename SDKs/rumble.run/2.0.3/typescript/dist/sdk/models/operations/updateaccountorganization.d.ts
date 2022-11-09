import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateAccountOrganizationPathParams extends SpeakeasyBase {
    orgId: string;
}
export declare class UpdateAccountOrganizationSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class UpdateAccountOrganizationRequest extends SpeakeasyBase {
    pathParams: UpdateAccountOrganizationPathParams;
    request: shared.OrgOptions;
    security: UpdateAccountOrganizationSecurity;
}
export declare class UpdateAccountOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    organization?: shared.Organization;
    statusCode: number;
}
