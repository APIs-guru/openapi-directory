import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserFollowsNetworksNetworkIdPathParams extends SpeakeasyBase {
    networkId: number;
}
export declare class GetUserFollowsNetworksNetworkIdRequest extends SpeakeasyBase {
    pathParams: GetUserFollowsNetworksNetworkIdPathParams;
}
export declare class GetUserFollowsNetworksNetworkIdResponse extends SpeakeasyBase {
    contentType: string;
    networkFollow?: shared.NetworkFollow;
    statusCode: number;
}
