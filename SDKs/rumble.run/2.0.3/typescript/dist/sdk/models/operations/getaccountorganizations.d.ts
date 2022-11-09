import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAccountOrganizationsQueryParams extends SpeakeasyBase {
    search?: string;
}
export declare class GetAccountOrganizationsSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetAccountOrganizationsRequest extends SpeakeasyBase {
    queryParams: GetAccountOrganizationsQueryParams;
    security: GetAccountOrganizationsSecurity;
}
export declare class GetAccountOrganizationsResponse extends SpeakeasyBase {
    contentType: string;
    organizations?: shared.Organization[];
    statusCode: number;
}
