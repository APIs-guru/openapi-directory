import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetUserFollowsNetworksEmbedEnum {
    Network = "network"
}


export class GetUserFollowsNetworksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=embed" })
  embed?: GetUserFollowsNetworksEmbedEnum;
}


export class GetUserFollowsNetworksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUserFollowsNetworksQueryParams;
}


export class GetUserFollowsNetworksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.NetworkFollow })
  networkFollows?: shared.NetworkFollow[];

  @SpeakeasyMetadata()
  statusCode: number;
}
