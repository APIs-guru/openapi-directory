import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UserApiPostReportPathParams extends SpeakeasyBase {
    id: number;
}
export declare class UserApiPostReportRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    createReportModel?: shared.CreateReportModel;
    createReportModel1?: shared.CreateReportModel;
    createReportModel2?: shared.CreateReportModel;
    textXml: Uint8Array;
}
export declare class UserApiPostReportRequest extends SpeakeasyBase {
    pathParams: UserApiPostReportPathParams;
    request: UserApiPostReportRequests;
}
export declare class UserApiPostReportResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    userApiPostReport200ApplicationJsonBoolean?: boolean;
    userApiPostReport200ApplicationJsonpBoolean?: boolean;
    userApiPostReport200TextJsonBoolean?: boolean;
}
