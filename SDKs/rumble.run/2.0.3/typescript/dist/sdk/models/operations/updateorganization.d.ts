import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateOrganizationSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class UpdateOrganizationRequest extends SpeakeasyBase {
    request: shared.OrgOptions;
    security: UpdateOrganizationSecurity;
}
export declare class UpdateOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    organization?: shared.Organization;
    statusCode: number;
}
