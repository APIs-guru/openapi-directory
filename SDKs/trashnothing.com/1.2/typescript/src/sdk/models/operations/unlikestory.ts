import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UnlikeStoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=story_id" })
  storyId: string;
}


export class UnlikeStoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=device_pixel_ratio" })
  devicePixelRatio?: number;
}


export class UnlikeStoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UnlikeStoryPathParams;

  @Metadata()
  queryParams: UnlikeStoryQueryParams;
}


export class UnlikeStoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  story?: shared.Story;
}
