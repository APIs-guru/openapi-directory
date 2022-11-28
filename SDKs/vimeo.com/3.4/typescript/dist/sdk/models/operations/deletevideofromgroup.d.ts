import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteVideoFromGroupPathParams extends SpeakeasyBase {
    groupId: number;
    videoId: number;
}
export declare class DeleteVideoFromGroupSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class DeleteVideoFromGroupRequest extends SpeakeasyBase {
    pathParams: DeleteVideoFromGroupPathParams;
    security: DeleteVideoFromGroupSecurity;
}
export declare class DeleteVideoFromGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
