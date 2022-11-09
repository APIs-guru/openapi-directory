import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StoryIdPutPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class StoryIdPutQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=include_outline" })
  includeOutline?: boolean;
}


export class StoryIdPutRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StoryIdPutPathParams;

  @Metadata()
  queryParams: StoryIdPutQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Story;
}


export class StoryIdPutResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  problemDetail?: any;

  @Metadata()
  story?: shared.Story;
}
