import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetUserFollowsWebchannelsEmbedEnum {
    Webchannel = "webchannel"
}


export class GetUserFollowsWebchannelsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=embed" })
  embed?: GetUserFollowsWebchannelsEmbedEnum;
}


export class GetUserFollowsWebchannelsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUserFollowsWebchannelsQueryParams;
}


export class GetUserFollowsWebchannelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.WebchannelFollow })
  webchannelFollows?: shared.WebchannelFollow[];
}
