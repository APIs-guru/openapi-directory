import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteUcsManagerPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteUcsManagerSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class DeleteUcsManagerRequest extends SpeakeasyBase {
    pathParams: DeleteUcsManagerPathParams;
    security: DeleteUcsManagerSecurity;
}
export declare class DeleteUcsManagerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
