import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteHpovManagerPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteHpovManagerSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class DeleteHpovManagerRequest extends SpeakeasyBase {
    pathParams: DeleteHpovManagerPathParams;
    security: DeleteHpovManagerSecurity;
}
export declare class DeleteHpovManagerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
