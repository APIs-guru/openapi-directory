import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteMyFollowsFollowIdAlertPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=follow_id" })
  followId: string;
}


export class DeleteMyFollowsFollowIdAlertRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteMyFollowsFollowIdAlertPathParams;
}


export class DeleteMyFollowsFollowIdAlertResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
