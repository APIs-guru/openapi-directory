import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutDashboardPkPathParams extends SpeakeasyBase {
    pk: number;
}
export declare class PutDashboardPkSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class PutDashboardPk200ApplicationJson extends SpeakeasyBase {
    id?: number;
    result?: shared.DashboardRestApiPut;
}
export declare class PutDashboardPk400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutDashboardPk401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutDashboardPk403ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutDashboardPk404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutDashboardPk422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutDashboardPk500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutDashboardPkRequest extends SpeakeasyBase {
    pathParams: PutDashboardPkPathParams;
    request: shared.DashboardRestApiPut;
    security: PutDashboardPkSecurity;
}
export declare class PutDashboardPkResponse extends SpeakeasyBase {
    contentType: string;
    putDashboardPk200ApplicationJsonObject?: PutDashboardPk200ApplicationJson;
    putDashboardPk400ApplicationJsonObject?: PutDashboardPk400ApplicationJson;
    putDashboardPk401ApplicationJsonObject?: PutDashboardPk401ApplicationJson;
    putDashboardPk403ApplicationJsonObject?: PutDashboardPk403ApplicationJson;
    putDashboardPk404ApplicationJsonObject?: PutDashboardPk404ApplicationJson;
    putDashboardPk422ApplicationJsonObject?: PutDashboardPk422ApplicationJson;
    putDashboardPk500ApplicationJsonObject?: PutDashboardPk500ApplicationJson;
    statusCode: number;
}
