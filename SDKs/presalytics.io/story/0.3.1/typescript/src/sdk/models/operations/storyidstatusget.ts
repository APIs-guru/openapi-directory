import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StoryIdStatusGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class StoryIdStatusGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StoryIdStatusGetPathParams;
}


export class StoryIdStatusGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  problemDetail?: any;

  @Metadata()
  status?: any;
}
