import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateNsxvManagerPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateNsxvManagerSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class UpdateNsxvManagerRequest extends SpeakeasyBase {
    pathParams: UpdateNsxvManagerPathParams;
    request?: shared.NsxvManagerDataSource;
    security: UpdateNsxvManagerSecurity;
}
export declare class UpdateNsxvManagerResponse extends SpeakeasyBase {
    contentType: string;
    nsxvManagerDataSource?: shared.NsxvManagerDataSource;
    statusCode: number;
}
