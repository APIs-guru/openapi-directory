import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteUserFollowsWebchannelsWebchannelIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=webchannel_id" })
  webchannelId: number;
}


export class DeleteUserFollowsWebchannelsWebchannelIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteUserFollowsWebchannelsWebchannelIdPathParams;
}


export class DeleteUserFollowsWebchannelsWebchannelIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
