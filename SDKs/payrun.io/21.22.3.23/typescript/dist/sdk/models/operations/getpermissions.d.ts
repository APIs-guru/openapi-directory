import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPermissionsHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetPermissionsRequest extends SpeakeasyBase {
    headers: GetPermissionsHeaders;
}
export declare class GetPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
