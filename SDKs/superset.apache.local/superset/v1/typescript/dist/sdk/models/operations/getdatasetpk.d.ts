import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDatasetPkPathParams extends SpeakeasyBase {
    pk: number;
}
export declare class GetDatasetPkQueryParams extends SpeakeasyBase {
    q?: shared.GetItemSchema;
}
export declare class GetDatasetPkSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetDatasetPk200ApplicationJsonDescriptionColumns extends SpeakeasyBase {
    columnName?: string;
}
export declare class GetDatasetPk200ApplicationJsonLabelColumns extends SpeakeasyBase {
    columnName?: string;
}
export declare class GetDatasetPk200ApplicationJson extends SpeakeasyBase {
    descriptionColumns?: GetDatasetPk200ApplicationJsonDescriptionColumns;
    id?: string;
    labelColumns?: GetDatasetPk200ApplicationJsonLabelColumns;
    result?: shared.DatasetRestApiGet;
    showColumns?: string[];
    showTitle?: string;
}
export declare class GetDatasetPk400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatasetPk401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatasetPk404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatasetPk422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatasetPk500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatasetPkRequest extends SpeakeasyBase {
    pathParams: GetDatasetPkPathParams;
    queryParams: GetDatasetPkQueryParams;
    security: GetDatasetPkSecurity;
}
export declare class GetDatasetPkResponse extends SpeakeasyBase {
    contentType: string;
    getDatasetPk200ApplicationJsonObject?: GetDatasetPk200ApplicationJson;
    getDatasetPk400ApplicationJsonObject?: GetDatasetPk400ApplicationJson;
    getDatasetPk401ApplicationJsonObject?: GetDatasetPk401ApplicationJson;
    getDatasetPk404ApplicationJsonObject?: GetDatasetPk404ApplicationJson;
    getDatasetPk422ApplicationJsonObject?: GetDatasetPk422ApplicationJson;
    getDatasetPk500ApplicationJsonObject?: GetDatasetPk500ApplicationJson;
    statusCode: number;
}
