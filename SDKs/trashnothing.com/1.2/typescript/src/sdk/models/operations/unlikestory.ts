import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UnlikeStoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=story_id" })
  storyId: string;
}


export class UnlikeStoryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_pixel_ratio" })
  devicePixelRatio?: number;
}


export class UnlikeStoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UnlikeStoryPathParams;

  @SpeakeasyMetadata()
  queryParams: UnlikeStoryQueryParams;
}


export class UnlikeStoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  story?: shared.Story;
}
