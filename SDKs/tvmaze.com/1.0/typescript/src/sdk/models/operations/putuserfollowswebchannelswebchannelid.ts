import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutUserFollowsWebchannelsWebchannelIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=webchannel_id" })
  webchannelId: number;
}


export class PutUserFollowsWebchannelsWebchannelIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutUserFollowsWebchannelsWebchannelIdPathParams;
}


export class PutUserFollowsWebchannelsWebchannelIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  webchannelFollow?: shared.WebchannelFollow;
}
