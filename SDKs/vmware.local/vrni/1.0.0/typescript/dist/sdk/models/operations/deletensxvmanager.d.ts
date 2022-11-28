import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteNsxvManagerPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteNsxvManagerSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class DeleteNsxvManagerRequest extends SpeakeasyBase {
    pathParams: DeleteNsxvManagerPathParams;
    security: DeleteNsxvManagerSecurity;
}
export declare class DeleteNsxvManagerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
