import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StoryIdDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class StoryIdDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StoryIdDeletePathParams;
}


export class StoryIdDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  problemDetail?: any;
}
