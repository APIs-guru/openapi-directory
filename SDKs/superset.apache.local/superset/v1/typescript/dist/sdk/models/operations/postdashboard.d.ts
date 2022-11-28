import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostDashboardSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class PostDashboard201ApplicationJson extends SpeakeasyBase {
    id?: number;
    result?: shared.DashboardRestApiPost;
}
export declare class PostDashboard400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostDashboard401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostDashboard404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostDashboard500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostDashboardRequest extends SpeakeasyBase {
    request: shared.DashboardRestApiPost;
    security: PostDashboardSecurity;
}
export declare class PostDashboardResponse extends SpeakeasyBase {
    contentType: string;
    postDashboard201ApplicationJsonObject?: PostDashboard201ApplicationJson;
    postDashboard400ApplicationJsonObject?: PostDashboard400ApplicationJson;
    postDashboard401ApplicationJsonObject?: PostDashboard401ApplicationJson;
    postDashboard404ApplicationJsonObject?: PostDashboard404ApplicationJson;
    postDashboard500ApplicationJsonObject?: PostDashboard500ApplicationJson;
    statusCode: number;
}
