import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteMyFollowsFollowIdPathParams extends SpeakeasyBase {
    followId: string;
}
export declare class DeleteMyFollowsFollowIdSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class DeleteMyFollowsFollowIdRequest extends SpeakeasyBase {
    pathParams: DeleteMyFollowsFollowIdPathParams;
    security: DeleteMyFollowsFollowIdSecurity;
}
export declare class DeleteMyFollowsFollowIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
