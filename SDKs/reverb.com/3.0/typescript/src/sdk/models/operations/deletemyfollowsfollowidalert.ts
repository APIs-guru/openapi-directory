import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteMyFollowsFollowIdAlertPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=follow_id" })
  followId: string;
}


export class DeleteMyFollowsFollowIdAlertRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteMyFollowsFollowIdAlertPathParams;
}


export class DeleteMyFollowsFollowIdAlertResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
