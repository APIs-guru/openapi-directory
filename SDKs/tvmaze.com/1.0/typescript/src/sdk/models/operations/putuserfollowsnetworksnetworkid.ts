import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutUserFollowsNetworksNetworkIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=network_id" })
  networkId: number;
}


export class PutUserFollowsNetworksNetworkIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutUserFollowsNetworksNetworkIdPathParams;
}


export class PutUserFollowsNetworksNetworkIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  networkFollow?: shared.NetworkFollow;

  @Metadata()
  statusCode: number;
}
