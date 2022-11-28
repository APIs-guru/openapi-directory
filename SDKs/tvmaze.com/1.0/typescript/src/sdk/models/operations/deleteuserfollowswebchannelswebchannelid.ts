import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteUserFollowsWebchannelsWebchannelIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webchannel_id" })
  webchannelId: number;
}


export class DeleteUserFollowsWebchannelsWebchannelIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteUserFollowsWebchannelsWebchannelIdPathParams;
}


export class DeleteUserFollowsWebchannelsWebchannelIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
