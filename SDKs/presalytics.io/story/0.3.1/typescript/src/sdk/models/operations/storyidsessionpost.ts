import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StoryIdSessionPostPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class StoryIdSessionPostRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StoryIdSessionPostPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class StoryIdSessionPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  problemDetail?: any;

  @Metadata()
  session?: shared.Session;
}
