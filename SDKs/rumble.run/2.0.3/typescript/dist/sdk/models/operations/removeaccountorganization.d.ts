import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class RemoveAccountOrganizationPathParams extends SpeakeasyBase {
    orgId: string;
}
export declare class RemoveAccountOrganizationSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class RemoveAccountOrganizationRequest extends SpeakeasyBase {
    pathParams: RemoveAccountOrganizationPathParams;
    security: RemoveAccountOrganizationSecurity;
}
export declare class RemoveAccountOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
