import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StoryPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=include_outline" })
  includeOutline?: boolean;
}


export class StoryPostRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: StoryPostQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class StoryPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  problemDetail?: any;

  @Metadata()
  story?: shared.Story;
}
