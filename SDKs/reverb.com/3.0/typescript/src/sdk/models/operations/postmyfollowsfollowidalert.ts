import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostMyFollowsFollowIdAlertPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=follow_id" })
  followId: string;
}


export class PostMyFollowsFollowIdAlertRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostMyFollowsFollowIdAlertPathParams;
}


export class PostMyFollowsFollowIdAlertResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
