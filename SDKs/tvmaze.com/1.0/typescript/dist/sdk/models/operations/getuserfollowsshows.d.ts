import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetUserFollowsShowsEmbedEnum {
    Show = "show"
}
export declare class GetUserFollowsShowsQueryParams extends SpeakeasyBase {
    embed?: GetUserFollowsShowsEmbedEnum;
}
export declare class GetUserFollowsShowsRequest extends SpeakeasyBase {
    queryParams: GetUserFollowsShowsQueryParams;
}
export declare class GetUserFollowsShowsResponse extends SpeakeasyBase {
    contentType: string;
    showFollows?: shared.ShowFollow[];
    statusCode: number;
}
