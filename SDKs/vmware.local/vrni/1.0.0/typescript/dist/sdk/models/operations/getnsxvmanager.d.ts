import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNsxvManagerPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetNsxvManagerSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetNsxvManagerRequest extends SpeakeasyBase {
    pathParams: GetNsxvManagerPathParams;
    security: GetNsxvManagerSecurity;
}
export declare class GetNsxvManagerResponse extends SpeakeasyBase {
    contentType: string;
    nsxvManagerDataSource?: shared.NsxvManagerDataSource;
    statusCode: number;
}
