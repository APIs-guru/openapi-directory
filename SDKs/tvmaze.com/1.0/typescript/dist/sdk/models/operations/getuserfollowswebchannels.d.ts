import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetUserFollowsWebchannelsEmbedEnum {
    Webchannel = "webchannel"
}
export declare class GetUserFollowsWebchannelsQueryParams extends SpeakeasyBase {
    embed?: GetUserFollowsWebchannelsEmbedEnum;
}
export declare class GetUserFollowsWebchannelsRequest extends SpeakeasyBase {
    queryParams: GetUserFollowsWebchannelsQueryParams;
}
export declare class GetUserFollowsWebchannelsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    webchannelFollows?: shared.WebchannelFollow[];
}
