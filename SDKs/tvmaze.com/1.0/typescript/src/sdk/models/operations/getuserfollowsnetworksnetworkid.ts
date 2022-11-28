import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUserFollowsNetworksNetworkIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=network_id" })
  networkId: number;
}


export class GetUserFollowsNetworksNetworkIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUserFollowsNetworksNetworkIdPathParams;
}


export class GetUserFollowsNetworksNetworkIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  networkFollow?: shared.NetworkFollow;

  @SpeakeasyMetadata()
  statusCode: number;
}
