import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserApiDeleteFollowedTagPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tagId" })
  tagId: number;
}


export class UserApiDeleteFollowedTagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserApiDeleteFollowedTagPathParams;
}


export class UserApiDeleteFollowedTagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
