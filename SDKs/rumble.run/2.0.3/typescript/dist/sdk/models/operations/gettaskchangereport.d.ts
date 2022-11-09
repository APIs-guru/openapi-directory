import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetTaskChangeReportPathParams extends SpeakeasyBase {
    taskId: string;
}
export declare class GetTaskChangeReportSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetTaskChangeReportRequest extends SpeakeasyBase {
    pathParams: GetTaskChangeReportPathParams;
    security: GetTaskChangeReportSecurity;
}
export declare class GetTaskChangeReportResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
