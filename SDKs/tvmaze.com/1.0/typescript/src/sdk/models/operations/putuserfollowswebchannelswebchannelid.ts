import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutUserFollowsWebchannelsWebchannelIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webchannel_id" })
  webchannelId: number;
}


export class PutUserFollowsWebchannelsWebchannelIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutUserFollowsWebchannelsWebchannelIdPathParams;
}


export class PutUserFollowsWebchannelsWebchannelIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  webchannelFollow?: shared.WebchannelFollow;
}
