import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteReportQueryParams extends SpeakeasyBase {
    q?: number[];
}
export declare class DeleteReportSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class DeleteReport200ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteReport401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteReport403ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteReport404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteReport422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteReport500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteReportRequest extends SpeakeasyBase {
    queryParams: DeleteReportQueryParams;
    security: DeleteReportSecurity;
}
export declare class DeleteReportResponse extends SpeakeasyBase {
    contentType: string;
    deleteReport200ApplicationJsonObject?: DeleteReport200ApplicationJson;
    deleteReport401ApplicationJsonObject?: DeleteReport401ApplicationJson;
    deleteReport403ApplicationJsonObject?: DeleteReport403ApplicationJson;
    deleteReport404ApplicationJsonObject?: DeleteReport404ApplicationJson;
    deleteReport422ApplicationJsonObject?: DeleteReport422ApplicationJson;
    deleteReport500ApplicationJsonObject?: DeleteReport500ApplicationJson;
    statusCode: number;
}
