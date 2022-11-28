import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVideoThumbnailsAlt1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class GetVideoThumbnailsAlt1QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetVideoThumbnailsAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVideoThumbnailsAlt1PathParams;

  @SpeakeasyMetadata()
  queryParams: GetVideoThumbnailsAlt1QueryParams;
}


export class GetVideoThumbnailsAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Picture })
  pictures?: shared.Picture[];
}
