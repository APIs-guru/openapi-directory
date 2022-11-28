import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteChartQueryParams extends SpeakeasyBase {
    q?: number[];
}
export declare class DeleteChartSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class DeleteChart200ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteChart401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteChart403ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteChart404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteChart422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteChart500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteChartRequest extends SpeakeasyBase {
    queryParams: DeleteChartQueryParams;
    security: DeleteChartSecurity;
}
export declare class DeleteChartResponse extends SpeakeasyBase {
    contentType: string;
    deleteChart200ApplicationJsonObject?: DeleteChart200ApplicationJson;
    deleteChart401ApplicationJsonObject?: DeleteChart401ApplicationJson;
    deleteChart403ApplicationJsonObject?: DeleteChart403ApplicationJson;
    deleteChart404ApplicationJsonObject?: DeleteChart404ApplicationJson;
    deleteChart422ApplicationJsonObject?: DeleteChart422ApplicationJson;
    deleteChart500ApplicationJsonObject?: DeleteChart500ApplicationJson;
    statusCode: number;
}
