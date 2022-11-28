import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostMyFollowsFollowIdAlertPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=follow_id" })
  followId: string;
}


export class PostMyFollowsFollowIdAlertRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostMyFollowsFollowIdAlertPathParams;
}


export class PostMyFollowsFollowIdAlertResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
