import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDatasetQueryParams extends SpeakeasyBase {
    q?: shared.GetListSchema;
}
export declare class GetDatasetSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetDataset200ApplicationJsonDescriptionColumns extends SpeakeasyBase {
    columnName?: string;
}
export declare class GetDataset200ApplicationJsonLabelColumns extends SpeakeasyBase {
    columnName?: string;
}
export declare class GetDataset200ApplicationJson extends SpeakeasyBase {
    count?: number;
    descriptionColumns?: GetDataset200ApplicationJsonDescriptionColumns;
    ids?: string[];
    labelColumns?: GetDataset200ApplicationJsonLabelColumns;
    listColumns?: string[];
    listTitle?: string;
    orderColumns?: string[];
    result?: shared.DatasetRestApiGetList[];
}
export declare class GetDataset400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDataset401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDataset422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDataset500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatasetRequest extends SpeakeasyBase {
    queryParams: GetDatasetQueryParams;
    security: GetDatasetSecurity;
}
export declare class GetDatasetResponse extends SpeakeasyBase {
    contentType: string;
    getDataset200ApplicationJsonObject?: GetDataset200ApplicationJson;
    getDataset400ApplicationJsonObject?: GetDataset400ApplicationJson;
    getDataset401ApplicationJsonObject?: GetDataset401ApplicationJson;
    getDataset422ApplicationJsonObject?: GetDataset422ApplicationJson;
    getDataset500ApplicationJsonObject?: GetDataset500ApplicationJson;
    statusCode: number;
}
