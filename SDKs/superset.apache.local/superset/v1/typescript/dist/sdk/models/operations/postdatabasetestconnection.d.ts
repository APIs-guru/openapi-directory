import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostDatabaseTestConnectionSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class PostDatabaseTestConnection200ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostDatabaseTestConnection400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostDatabaseTestConnection422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostDatabaseTestConnection500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostDatabaseTestConnectionRequest extends SpeakeasyBase {
    request: shared.DatabaseTestConnectionSchema;
    security: PostDatabaseTestConnectionSecurity;
}
export declare class PostDatabaseTestConnectionResponse extends SpeakeasyBase {
    contentType: string;
    postDatabaseTestConnection200ApplicationJsonObject?: PostDatabaseTestConnection200ApplicationJson;
    postDatabaseTestConnection400ApplicationJsonObject?: PostDatabaseTestConnection400ApplicationJson;
    postDatabaseTestConnection422ApplicationJsonObject?: PostDatabaseTestConnection422ApplicationJson;
    postDatabaseTestConnection500ApplicationJsonObject?: PostDatabaseTestConnection500ApplicationJson;
    statusCode: number;
}
