import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteReportPkPathParams extends SpeakeasyBase {
    pk: number;
}
export declare class DeleteReportPkSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class DeleteReportPk200ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteReportPk403ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteReportPk404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteReportPk422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteReportPk500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteReportPkRequest extends SpeakeasyBase {
    pathParams: DeleteReportPkPathParams;
    security: DeleteReportPkSecurity;
}
export declare class DeleteReportPkResponse extends SpeakeasyBase {
    contentType: string;
    deleteReportPk200ApplicationJsonObject?: DeleteReportPk200ApplicationJson;
    deleteReportPk403ApplicationJsonObject?: DeleteReportPk403ApplicationJson;
    deleteReportPk404ApplicationJsonObject?: DeleteReportPk404ApplicationJson;
    deleteReportPk422ApplicationJsonObject?: DeleteReportPk422ApplicationJson;
    deleteReportPk500ApplicationJsonObject?: DeleteReportPk500ApplicationJson;
    statusCode: number;
}
