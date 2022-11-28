import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LikeStoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=story_id" })
  storyId: string;
}


export class LikeStoryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_pixel_ratio" })
  devicePixelRatio?: number;
}


export class LikeStoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LikeStoryPathParams;

  @SpeakeasyMetadata()
  queryParams: LikeStoryQueryParams;
}


export class LikeStoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  story?: shared.Story;
}
