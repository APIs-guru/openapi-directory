import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDashboardQueryParams extends SpeakeasyBase {
    q?: shared.GetListSchema;
}
export declare class GetDashboardSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetDashboard200ApplicationJsonDescriptionColumns extends SpeakeasyBase {
    columnName?: string;
}
export declare class GetDashboard200ApplicationJsonLabelColumns extends SpeakeasyBase {
    columnName?: string;
}
export declare class GetDashboard200ApplicationJson extends SpeakeasyBase {
    count?: number;
    descriptionColumns?: GetDashboard200ApplicationJsonDescriptionColumns;
    ids?: string[];
    labelColumns?: GetDashboard200ApplicationJsonLabelColumns;
    listColumns?: string[];
    listTitle?: string;
    orderColumns?: string[];
    result?: shared.DashboardRestApiGetList[];
}
export declare class GetDashboard400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDashboard401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDashboard422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDashboard500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDashboardRequest extends SpeakeasyBase {
    queryParams: GetDashboardQueryParams;
    security: GetDashboardSecurity;
}
export declare class GetDashboardResponse extends SpeakeasyBase {
    contentType: string;
    getDashboard200ApplicationJsonObject?: GetDashboard200ApplicationJson;
    getDashboard400ApplicationJsonObject?: GetDashboard400ApplicationJson;
    getDashboard401ApplicationJsonObject?: GetDashboard401ApplicationJson;
    getDashboard422ApplicationJsonObject?: GetDashboard422ApplicationJson;
    getDashboard500ApplicationJsonObject?: GetDashboard500ApplicationJson;
    statusCode: number;
}
