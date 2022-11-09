import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUserFollowsWebchannelsWebchannelIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=webchannel_id" })
  webchannelId: number;
}


export class GetUserFollowsWebchannelsWebchannelIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUserFollowsWebchannelsWebchannelIdPathParams;
}


export class GetUserFollowsWebchannelsWebchannelIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  webchannelFollow?: shared.WebchannelFollow;
}
