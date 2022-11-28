import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutChartPkPathParams extends SpeakeasyBase {
    pk: number;
}
export declare class PutChartPkSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class PutChartPk200ApplicationJson extends SpeakeasyBase {
    id?: number;
    result?: shared.ChartRestApiPut;
}
export declare class PutChartPk400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutChartPk401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutChartPk403ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutChartPk404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutChartPk422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutChartPk500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutChartPkRequest extends SpeakeasyBase {
    pathParams: PutChartPkPathParams;
    request: shared.ChartRestApiPut;
    security: PutChartPkSecurity;
}
export declare class PutChartPkResponse extends SpeakeasyBase {
    contentType: string;
    putChartPk200ApplicationJsonObject?: PutChartPk200ApplicationJson;
    putChartPk400ApplicationJsonObject?: PutChartPk400ApplicationJson;
    putChartPk401ApplicationJsonObject?: PutChartPk401ApplicationJson;
    putChartPk403ApplicationJsonObject?: PutChartPk403ApplicationJson;
    putChartPk404ApplicationJsonObject?: PutChartPk404ApplicationJson;
    putChartPk422ApplicationJsonObject?: PutChartPk422ApplicationJson;
    putChartPk500ApplicationJsonObject?: PutChartPk500ApplicationJson;
    statusCode: number;
}
