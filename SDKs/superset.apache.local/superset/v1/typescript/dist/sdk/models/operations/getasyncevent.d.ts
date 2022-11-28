import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAsyncEventQueryParams extends SpeakeasyBase {
    lastId?: string;
}
export declare class GetAsyncEventSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetAsyncEvent200ApplicationJsonResult extends SpeakeasyBase {
    channelId?: string;
    errors?: Map<string, any>[];
    id?: string;
    jobId?: string;
    resultUrl?: string;
    status?: string;
    userId?: number;
}
export declare class GetAsyncEvent200ApplicationJson extends SpeakeasyBase {
    result?: GetAsyncEvent200ApplicationJsonResult[];
}
export declare class GetAsyncEvent401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetAsyncEvent500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetAsyncEventRequest extends SpeakeasyBase {
    queryParams: GetAsyncEventQueryParams;
    security: GetAsyncEventSecurity;
}
export declare class GetAsyncEventResponse extends SpeakeasyBase {
    contentType: string;
    getAsyncEvent200ApplicationJsonObject?: GetAsyncEvent200ApplicationJson;
    getAsyncEvent401ApplicationJsonObject?: GetAsyncEvent401ApplicationJson;
    getAsyncEvent500ApplicationJsonObject?: GetAsyncEvent500ApplicationJson;
    statusCode: number;
}
