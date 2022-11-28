import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteHpvcManagerPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteHpvcManagerSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class DeleteHpvcManagerRequest extends SpeakeasyBase {
    pathParams: DeleteHpvcManagerPathParams;
    security: DeleteHpvcManagerSecurity;
}
export declare class DeleteHpvcManagerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
