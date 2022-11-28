import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListSchemaVersionServerList: readonly ["https://events.twilio.com"];
export declare class ListSchemaVersionPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ListSchemaVersionQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListSchemaVersionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListSchemaVersionListSchemaVersionResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListSchemaVersionListSchemaVersionResponse extends SpeakeasyBase {
    meta?: ListSchemaVersionListSchemaVersionResponseMeta;
    schemaVersions?: shared.EventsV1SchemaSchemaVersion[];
}
export declare class ListSchemaVersionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListSchemaVersionPathParams;
    queryParams: ListSchemaVersionQueryParams;
    security: ListSchemaVersionSecurity;
}
export declare class ListSchemaVersionResponse extends SpeakeasyBase {
    contentType: string;
    listSchemaVersionResponse?: ListSchemaVersionListSchemaVersionResponse;
    statusCode: number;
}
