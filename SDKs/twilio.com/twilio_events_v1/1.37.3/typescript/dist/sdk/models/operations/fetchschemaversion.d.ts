import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchSchemaVersionServerList: readonly ["https://events.twilio.com"];
export declare class FetchSchemaVersionPathParams extends SpeakeasyBase {
    id: string;
    schemaVersion: number;
}
export declare class FetchSchemaVersionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchSchemaVersionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchSchemaVersionPathParams;
    security: FetchSchemaVersionSecurity;
}
export declare class FetchSchemaVersionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    eventsV1SchemaSchemaVersion?: shared.EventsV1SchemaSchemaVersion;
}
