import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUserFollowsWebchannelsWebchannelIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webchannel_id" })
  webchannelId: number;
}


export class GetUserFollowsWebchannelsWebchannelIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUserFollowsWebchannelsWebchannelIdPathParams;
}


export class GetUserFollowsWebchannelsWebchannelIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  webchannelFollow?: shared.WebchannelFollow;
}
