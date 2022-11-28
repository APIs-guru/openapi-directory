import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteDashboardQueryParams extends SpeakeasyBase {
    q?: number[];
}
export declare class DeleteDashboardSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class DeleteDashboard200ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteDashboard401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteDashboard403ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteDashboard404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteDashboard422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteDashboard500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteDashboardRequest extends SpeakeasyBase {
    queryParams: DeleteDashboardQueryParams;
    security: DeleteDashboardSecurity;
}
export declare class DeleteDashboardResponse extends SpeakeasyBase {
    contentType: string;
    deleteDashboard200ApplicationJsonObject?: DeleteDashboard200ApplicationJson;
    deleteDashboard401ApplicationJsonObject?: DeleteDashboard401ApplicationJson;
    deleteDashboard403ApplicationJsonObject?: DeleteDashboard403ApplicationJson;
    deleteDashboard404ApplicationJsonObject?: DeleteDashboard404ApplicationJson;
    deleteDashboard422ApplicationJsonObject?: DeleteDashboard422ApplicationJson;
    deleteDashboard500ApplicationJsonObject?: DeleteDashboard500ApplicationJson;
    statusCode: number;
}
