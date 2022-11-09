import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UserApiDeleteFollowedTagPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tagId" })
  tagId: number;
}


export class UserApiDeleteFollowedTagRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UserApiDeleteFollowedTagPathParams;
}


export class UserApiDeleteFollowedTagResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
