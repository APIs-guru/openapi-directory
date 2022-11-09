import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UserApiPostFollowedTagPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tagId" })
  tagId: number;
}


export class UserApiPostFollowedTagRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UserApiPostFollowedTagPathParams;
}


export class UserApiPostFollowedTagResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
