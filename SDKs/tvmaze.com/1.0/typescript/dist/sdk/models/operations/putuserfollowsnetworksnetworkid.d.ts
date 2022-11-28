import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutUserFollowsNetworksNetworkIdPathParams extends SpeakeasyBase {
    networkId: number;
}
export declare class PutUserFollowsNetworksNetworkIdRequest extends SpeakeasyBase {
    pathParams: PutUserFollowsNetworksNetworkIdPathParams;
}
export declare class PutUserFollowsNetworksNetworkIdResponse extends SpeakeasyBase {
    contentType: string;
    networkFollow?: shared.NetworkFollow;
    statusCode: number;
}
