import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteApplicationPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteApplicationSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class DeleteApplicationRequest extends SpeakeasyBase {
    pathParams: DeleteApplicationPathParams;
    security: DeleteApplicationSecurity;
}
export declare class DeleteApplicationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
