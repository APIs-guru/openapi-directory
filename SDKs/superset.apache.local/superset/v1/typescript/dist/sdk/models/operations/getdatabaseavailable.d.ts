import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDatabaseAvailableSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetDatabaseAvailable200ApplicationJson extends SpeakeasyBase {
    availableDrivers?: string[];
    defaultDriver?: string;
    engine?: string;
    name?: string;
    parameters?: Map<string, any>;
    preferred?: boolean;
    sqlalchemyUriPlaceholder?: string;
}
export declare class GetDatabaseAvailable400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatabaseAvailable500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatabaseAvailableRequest extends SpeakeasyBase {
    security: GetDatabaseAvailableSecurity;
}
export declare class GetDatabaseAvailableResponse extends SpeakeasyBase {
    contentType: string;
    getDatabaseAvailable200ApplicationJsonObjects?: GetDatabaseAvailable200ApplicationJson[];
    getDatabaseAvailable400ApplicationJsonObject?: GetDatabaseAvailable400ApplicationJson;
    getDatabaseAvailable500ApplicationJsonObject?: GetDatabaseAvailable500ApplicationJson;
    statusCode: number;
}
