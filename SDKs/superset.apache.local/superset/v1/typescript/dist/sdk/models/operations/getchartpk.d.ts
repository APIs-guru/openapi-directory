import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChartPkPathParams extends SpeakeasyBase {
    pk: number;
}
export declare class GetChartPkQueryParams extends SpeakeasyBase {
    q?: shared.GetItemSchema;
}
export declare class GetChartPkSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetChartPk200ApplicationJsonDescriptionColumns extends SpeakeasyBase {
    columnName?: string;
}
export declare class GetChartPk200ApplicationJsonLabelColumns extends SpeakeasyBase {
    columnName?: string;
}
export declare class GetChartPk200ApplicationJson extends SpeakeasyBase {
    descriptionColumns?: GetChartPk200ApplicationJsonDescriptionColumns;
    id?: string;
    labelColumns?: GetChartPk200ApplicationJsonLabelColumns;
    result?: shared.ChartRestApiGet;
    showColumns?: string[];
    showTitle?: string;
}
export declare class GetChartPk400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetChartPk401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetChartPk404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetChartPk422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetChartPk500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetChartPkRequest extends SpeakeasyBase {
    pathParams: GetChartPkPathParams;
    queryParams: GetChartPkQueryParams;
    security: GetChartPkSecurity;
}
export declare class GetChartPkResponse extends SpeakeasyBase {
    contentType: string;
    getChartPk200ApplicationJsonObject?: GetChartPk200ApplicationJson;
    getChartPk400ApplicationJsonObject?: GetChartPk400ApplicationJson;
    getChartPk401ApplicationJsonObject?: GetChartPk401ApplicationJson;
    getChartPk404ApplicationJsonObject?: GetChartPk404ApplicationJson;
    getChartPk422ApplicationJsonObject?: GetChartPk422ApplicationJson;
    getChartPk500ApplicationJsonObject?: GetChartPk500ApplicationJson;
    statusCode: number;
}
