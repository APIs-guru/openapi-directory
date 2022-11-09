import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StoryPostFileJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=include_outline" })
  includeOutline?: boolean;
}


export class StoryPostFileJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: StoryPostFileJsonQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class StoryPostFileJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  problemDetail?: any;

  @Metadata()
  story?: shared.Story;
}
