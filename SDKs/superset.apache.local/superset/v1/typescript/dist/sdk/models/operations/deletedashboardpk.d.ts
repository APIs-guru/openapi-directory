import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteDashboardPkPathParams extends SpeakeasyBase {
    pk: number;
}
export declare class DeleteDashboardPkSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class DeleteDashboardPk200ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteDashboardPk401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteDashboardPk403ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteDashboardPk404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteDashboardPk422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteDashboardPk500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteDashboardPkRequest extends SpeakeasyBase {
    pathParams: DeleteDashboardPkPathParams;
    security: DeleteDashboardPkSecurity;
}
export declare class DeleteDashboardPkResponse extends SpeakeasyBase {
    contentType: string;
    deleteDashboardPk200ApplicationJsonObject?: DeleteDashboardPk200ApplicationJson;
    deleteDashboardPk401ApplicationJsonObject?: DeleteDashboardPk401ApplicationJson;
    deleteDashboardPk403ApplicationJsonObject?: DeleteDashboardPk403ApplicationJson;
    deleteDashboardPk404ApplicationJsonObject?: DeleteDashboardPk404ApplicationJson;
    deleteDashboardPk422ApplicationJsonObject?: DeleteDashboardPk422ApplicationJson;
    deleteDashboardPk500ApplicationJsonObject?: DeleteDashboardPk500ApplicationJson;
    statusCode: number;
}
