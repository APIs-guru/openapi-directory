import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StoryPostFileQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_outline" })
  includeOutline?: boolean;
}


export class StoryPostFileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: StoryPostFileQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: any;
}


export class StoryPostFileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  problemDetail?: any;

  @SpeakeasyMetadata()
  story?: shared.Story;
}
