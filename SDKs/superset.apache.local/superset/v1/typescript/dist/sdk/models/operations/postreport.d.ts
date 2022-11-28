import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostReportSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class PostReport201ApplicationJson extends SpeakeasyBase {
    id?: number;
    result?: shared.ReportScheduleRestApiPost;
}
export declare class PostReport400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostReport401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostReport404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostReport500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostReportRequest extends SpeakeasyBase {
    request: shared.ReportScheduleRestApiPost;
    security: PostReportSecurity;
}
export declare class PostReportResponse extends SpeakeasyBase {
    contentType: string;
    postReport201ApplicationJsonObject?: PostReport201ApplicationJson;
    postReport400ApplicationJsonObject?: PostReport400ApplicationJson;
    postReport401ApplicationJsonObject?: PostReport401ApplicationJson;
    postReport404ApplicationJsonObject?: PostReport404ApplicationJson;
    postReport500ApplicationJsonObject?: PostReport500ApplicationJson;
    statusCode: number;
}
