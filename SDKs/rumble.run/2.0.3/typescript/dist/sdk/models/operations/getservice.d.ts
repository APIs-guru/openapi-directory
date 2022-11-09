import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetServicePathParams extends SpeakeasyBase {
    serviceId: string;
}
export declare class GetServiceSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetServiceRequest extends SpeakeasyBase {
    pathParams: GetServicePathParams;
    security: GetServiceSecurity;
}
export declare class GetServiceResponse extends SpeakeasyBase {
    contentType: string;
    service?: shared.Service;
    statusCode: number;
}
