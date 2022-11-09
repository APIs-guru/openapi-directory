import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteUserFollowsNetworksNetworkIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=network_id" })
  networkId: number;
}


export class DeleteUserFollowsNetworksNetworkIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteUserFollowsNetworksNetworkIdPathParams;
}


export class DeleteUserFollowsNetworksNetworkIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
