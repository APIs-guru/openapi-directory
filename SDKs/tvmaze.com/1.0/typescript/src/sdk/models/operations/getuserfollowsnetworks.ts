import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetUserFollowsNetworksEmbedEnum {
    Network = "network"
}


export class GetUserFollowsNetworksQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=embed" })
  embed?: GetUserFollowsNetworksEmbedEnum;
}


export class GetUserFollowsNetworksRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUserFollowsNetworksQueryParams;
}


export class GetUserFollowsNetworksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.NetworkFollow })
  networkFollows?: shared.NetworkFollow[];

  @Metadata()
  statusCode: number;
}
