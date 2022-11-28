import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDatabaseQueryParams extends SpeakeasyBase {
    q?: shared.GetListSchema;
}
export declare class GetDatabaseSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetDatabase200ApplicationJsonDescriptionColumns extends SpeakeasyBase {
    columnName?: string;
}
export declare class GetDatabase200ApplicationJsonLabelColumns extends SpeakeasyBase {
    columnName?: string;
}
export declare class GetDatabase200ApplicationJson extends SpeakeasyBase {
    count?: number;
    descriptionColumns?: GetDatabase200ApplicationJsonDescriptionColumns;
    ids?: string[];
    labelColumns?: GetDatabase200ApplicationJsonLabelColumns;
    listColumns?: string[];
    listTitle?: string;
    orderColumns?: string[];
    result?: shared.DatabaseRestApiGetList[];
}
export declare class GetDatabase400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatabase401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatabase422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatabase500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatabaseRequest extends SpeakeasyBase {
    queryParams: GetDatabaseQueryParams;
    security: GetDatabaseSecurity;
}
export declare class GetDatabaseResponse extends SpeakeasyBase {
    contentType: string;
    getDatabase200ApplicationJsonObject?: GetDatabase200ApplicationJson;
    getDatabase400ApplicationJsonObject?: GetDatabase400ApplicationJson;
    getDatabase401ApplicationJsonObject?: GetDatabase401ApplicationJson;
    getDatabase422ApplicationJsonObject?: GetDatabase422ApplicationJson;
    getDatabase500ApplicationJsonObject?: GetDatabase500ApplicationJson;
    statusCode: number;
}
