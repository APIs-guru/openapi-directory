import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StoryIdOutlineGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class StoryIdOutlineGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StoryIdOutlineGetPathParams;
}


export class StoryIdOutlineGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  problemDetail?: any;

  @Metadata()
  status?: any;

  @Metadata()
  storyIdOutlineGet200ApplicationJsonString?: string;
}
