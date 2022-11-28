import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetUserFollowsNetworksEmbedEnum {
    Network = "network"
}
export declare class GetUserFollowsNetworksQueryParams extends SpeakeasyBase {
    embed?: GetUserFollowsNetworksEmbedEnum;
}
export declare class GetUserFollowsNetworksRequest extends SpeakeasyBase {
    queryParams: GetUserFollowsNetworksQueryParams;
}
export declare class GetUserFollowsNetworksResponse extends SpeakeasyBase {
    contentType: string;
    networkFollows?: shared.NetworkFollow[];
    statusCode: number;
}
