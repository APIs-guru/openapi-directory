import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserFollowsWebchannelsWebchannelIdPathParams extends SpeakeasyBase {
    webchannelId: number;
}
export declare class GetUserFollowsWebchannelsWebchannelIdRequest extends SpeakeasyBase {
    pathParams: GetUserFollowsWebchannelsWebchannelIdPathParams;
}
export declare class GetUserFollowsWebchannelsWebchannelIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    webchannelFollow?: shared.WebchannelFollow;
}
