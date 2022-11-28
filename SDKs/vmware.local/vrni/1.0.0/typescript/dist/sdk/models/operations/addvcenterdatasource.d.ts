import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddVcenterDatasourceSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class AddVcenterDatasourceRequest extends SpeakeasyBase {
    request: shared.VCenterDataSourceRequest;
    security: AddVcenterDatasourceSecurity;
}
export declare class AddVcenterDatasourceResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    statusCode: number;
    vCenterDataSource?: shared.VCenterDataSource;
}
