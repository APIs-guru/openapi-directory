import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOrganizationSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetOrganizationRequest extends SpeakeasyBase {
    security: GetOrganizationSecurity;
}
export declare class GetOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    organization?: shared.Organization;
    statusCode: number;
}
