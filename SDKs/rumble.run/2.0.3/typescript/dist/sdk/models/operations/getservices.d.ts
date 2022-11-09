import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetServicesQueryParams extends SpeakeasyBase {
    search?: string;
}
export declare class GetServicesSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetServicesRequest extends SpeakeasyBase {
    queryParams: GetServicesQueryParams;
    security: GetServicesSecurity;
}
export declare class GetServicesResponse extends SpeakeasyBase {
    contentType: string;
    services?: shared.Service[];
    statusCode: number;
}
