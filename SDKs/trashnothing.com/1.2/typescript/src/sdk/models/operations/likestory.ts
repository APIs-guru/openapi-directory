import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LikeStoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=story_id" })
  storyId: string;
}


export class LikeStoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=device_pixel_ratio" })
  devicePixelRatio?: number;
}


export class LikeStoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LikeStoryPathParams;

  @Metadata()
  queryParams: LikeStoryQueryParams;
}


export class LikeStoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  story?: shared.Story;
}
