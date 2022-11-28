import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGroupPathParams extends SpeakeasyBase {
    groupId: string;
}
export declare class GetGroupSecurity extends SpeakeasyBase {
    oauth2Implicit?: shared.SchemeOauth2Implicit;
    oauth2Code?: shared.SchemeOauth2Code;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetGroupRequest extends SpeakeasyBase {
    pathParams: GetGroupPathParams;
    security: GetGroupSecurity;
}
export declare class GetGroupResponse extends SpeakeasyBase {
    contentType: string;
    group?: shared.Group;
    statusCode: number;
}
