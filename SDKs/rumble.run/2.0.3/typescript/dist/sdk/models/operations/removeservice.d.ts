import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class RemoveServicePathParams extends SpeakeasyBase {
    serviceId: string;
}
export declare class RemoveServiceSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class RemoveServiceRequest extends SpeakeasyBase {
    pathParams: RemoveServicePathParams;
    security: RemoveServiceSecurity;
}
export declare class RemoveServiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
