import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUserFollowsNetworksNetworkIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=network_id" })
  networkId: number;
}


export class GetUserFollowsNetworksNetworkIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUserFollowsNetworksNetworkIdPathParams;
}


export class GetUserFollowsNetworksNetworkIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  networkFollow?: shared.NetworkFollow;

  @Metadata()
  statusCode: number;
}
