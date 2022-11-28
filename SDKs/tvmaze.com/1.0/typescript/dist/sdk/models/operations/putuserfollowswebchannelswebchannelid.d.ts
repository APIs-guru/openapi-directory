import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutUserFollowsWebchannelsWebchannelIdPathParams extends SpeakeasyBase {
    webchannelId: number;
}
export declare class PutUserFollowsWebchannelsWebchannelIdRequest extends SpeakeasyBase {
    pathParams: PutUserFollowsWebchannelsWebchannelIdPathParams;
}
export declare class PutUserFollowsWebchannelsWebchannelIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    webchannelFollow?: shared.WebchannelFollow;
}
