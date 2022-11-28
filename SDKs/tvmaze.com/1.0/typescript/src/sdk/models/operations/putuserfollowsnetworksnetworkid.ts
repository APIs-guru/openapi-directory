import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutUserFollowsNetworksNetworkIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=network_id" })
  networkId: number;
}


export class PutUserFollowsNetworksNetworkIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutUserFollowsNetworksNetworkIdPathParams;
}


export class PutUserFollowsNetworksNetworkIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  networkFollow?: shared.NetworkFollow;

  @SpeakeasyMetadata()
  statusCode: number;
}
