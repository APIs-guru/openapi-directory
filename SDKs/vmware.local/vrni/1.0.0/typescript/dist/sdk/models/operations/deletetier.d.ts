import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteTierPathParams extends SpeakeasyBase {
    id: string;
    tierId: string;
}
export declare class DeleteTierSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class DeleteTierRequest extends SpeakeasyBase {
    pathParams: DeleteTierPathParams;
    security: DeleteTierSecurity;
}
export declare class DeleteTierResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
