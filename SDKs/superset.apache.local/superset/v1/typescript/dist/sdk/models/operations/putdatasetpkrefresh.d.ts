import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutDatasetPkRefreshPathParams extends SpeakeasyBase {
    pk: number;
}
export declare class PutDatasetPkRefreshSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class PutDatasetPkRefresh200ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutDatasetPkRefresh401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutDatasetPkRefresh403ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutDatasetPkRefresh404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutDatasetPkRefresh422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutDatasetPkRefresh500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutDatasetPkRefreshRequest extends SpeakeasyBase {
    pathParams: PutDatasetPkRefreshPathParams;
    security: PutDatasetPkRefreshSecurity;
}
export declare class PutDatasetPkRefreshResponse extends SpeakeasyBase {
    contentType: string;
    putDatasetPkRefresh200ApplicationJsonObject?: PutDatasetPkRefresh200ApplicationJson;
    putDatasetPkRefresh401ApplicationJsonObject?: PutDatasetPkRefresh401ApplicationJson;
    putDatasetPkRefresh403ApplicationJsonObject?: PutDatasetPkRefresh403ApplicationJson;
    putDatasetPkRefresh404ApplicationJsonObject?: PutDatasetPkRefresh404ApplicationJson;
    putDatasetPkRefresh422ApplicationJsonObject?: PutDatasetPkRefresh422ApplicationJson;
    putDatasetPkRefresh500ApplicationJsonObject?: PutDatasetPkRefresh500ApplicationJson;
    statusCode: number;
}
