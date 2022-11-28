import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JoinGroupPathParams extends SpeakeasyBase {
    groupId: number;
    userId: number;
}
export declare class JoinGroupSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class JoinGroupRequest extends SpeakeasyBase {
    pathParams: JoinGroupPathParams;
    security: JoinGroupSecurity;
}
export declare class JoinGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
