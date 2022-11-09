import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StoryPostFileQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=include_outline" })
  includeOutline?: boolean;
}


export class StoryPostFileRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: StoryPostFileQueryParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: any;
}


export class StoryPostFileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  problemDetail?: any;

  @Metadata()
  story?: shared.Story;
}
