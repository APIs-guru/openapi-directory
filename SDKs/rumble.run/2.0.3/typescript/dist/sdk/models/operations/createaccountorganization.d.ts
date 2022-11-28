import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateAccountOrganizationSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class CreateAccountOrganizationRequest extends SpeakeasyBase {
    request: shared.OrgOptions;
    security: CreateAccountOrganizationSecurity;
}
export declare class CreateAccountOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    organization?: shared.Organization;
    statusCode: number;
}
