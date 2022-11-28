import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteAristaSwitchPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteAristaSwitchSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class DeleteAristaSwitchRequest extends SpeakeasyBase {
    pathParams: DeleteAristaSwitchPathParams;
    security: DeleteAristaSwitchSecurity;
}
export declare class DeleteAristaSwitchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
