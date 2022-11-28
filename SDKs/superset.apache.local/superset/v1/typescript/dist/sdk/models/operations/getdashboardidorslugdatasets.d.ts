import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDashboardIdOrSlugDatasetsPathParams extends SpeakeasyBase {
    idOrSlug: string;
}
export declare class GetDashboardIdOrSlugDatasetsSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetDashboardIdOrSlugDatasets200ApplicationJson extends SpeakeasyBase {
    result?: shared.DashboardDatasetSchema[];
}
export declare class GetDashboardIdOrSlugDatasets400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDashboardIdOrSlugDatasets401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDashboardIdOrSlugDatasets404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDashboardIdOrSlugDatasetsRequest extends SpeakeasyBase {
    pathParams: GetDashboardIdOrSlugDatasetsPathParams;
    security: GetDashboardIdOrSlugDatasetsSecurity;
}
export declare class GetDashboardIdOrSlugDatasetsResponse extends SpeakeasyBase {
    contentType: string;
    getDashboardIdOrSlugDatasets200ApplicationJsonObject?: GetDashboardIdOrSlugDatasets200ApplicationJson;
    getDashboardIdOrSlugDatasets400ApplicationJsonObject?: GetDashboardIdOrSlugDatasets400ApplicationJson;
    getDashboardIdOrSlugDatasets401ApplicationJsonObject?: GetDashboardIdOrSlugDatasets401ApplicationJson;
    getDashboardIdOrSlugDatasets404ApplicationJsonObject?: GetDashboardIdOrSlugDatasets404ApplicationJson;
    statusCode: number;
}
