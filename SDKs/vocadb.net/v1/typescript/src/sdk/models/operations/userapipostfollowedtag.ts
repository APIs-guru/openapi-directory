import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserApiPostFollowedTagPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tagId" })
  tagId: number;
}


export class UserApiPostFollowedTagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserApiPostFollowedTagPathParams;
}


export class UserApiPostFollowedTagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
