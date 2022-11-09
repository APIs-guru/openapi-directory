import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StoryIdOutlinePostPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class StoryIdOutlinePostRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StoryIdOutlinePostPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: string;
}


export class StoryIdOutlinePostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  problemDetail?: any;
}
