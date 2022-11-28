import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteUserFollowsNetworksNetworkIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=network_id" })
  networkId: number;
}


export class DeleteUserFollowsNetworksNetworkIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteUserFollowsNetworksNetworkIdPathParams;
}


export class DeleteUserFollowsNetworksNetworkIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
