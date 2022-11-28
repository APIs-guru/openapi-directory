import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddNsxvManagerDatasourceSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class AddNsxvManagerDatasourceRequest extends SpeakeasyBase {
    request?: shared.NsxvManagerDataSourceRequest;
    security: AddNsxvManagerDatasourceSecurity;
}
export declare class AddNsxvManagerDatasourceResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    nsxvManagerDataSource?: shared.NsxvManagerDataSource;
    statusCode: number;
}
