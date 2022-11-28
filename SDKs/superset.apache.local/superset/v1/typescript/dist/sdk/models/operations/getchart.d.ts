import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChartQueryParams extends SpeakeasyBase {
    q?: shared.GetListSchema;
}
export declare class GetChartSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetChart200ApplicationJsonDescriptionColumns extends SpeakeasyBase {
    columnName?: string;
}
export declare class GetChart200ApplicationJsonLabelColumns extends SpeakeasyBase {
    columnName?: string;
}
export declare class GetChart200ApplicationJson extends SpeakeasyBase {
    count?: number;
    descriptionColumns?: GetChart200ApplicationJsonDescriptionColumns;
    ids?: string[];
    labelColumns?: GetChart200ApplicationJsonLabelColumns;
    listColumns?: string[];
    listTitle?: string;
    orderColumns?: string[];
    result?: shared.ChartRestApiGetList[];
}
export declare class GetChart400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetChart401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetChart422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetChart500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetChartRequest extends SpeakeasyBase {
    queryParams: GetChartQueryParams;
    security: GetChartSecurity;
}
export declare class GetChartResponse extends SpeakeasyBase {
    contentType: string;
    getChart200ApplicationJsonObject?: GetChart200ApplicationJson;
    getChart400ApplicationJsonObject?: GetChart400ApplicationJson;
    getChart401ApplicationJsonObject?: GetChart401ApplicationJson;
    getChart422ApplicationJsonObject?: GetChart422ApplicationJson;
    getChart500ApplicationJsonObject?: GetChart500ApplicationJson;
    statusCode: number;
}
