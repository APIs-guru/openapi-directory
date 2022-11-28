import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVideoLikesAlt1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}

export enum GetVideoLikesAlt1DirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum GetVideoLikesAlt1SortEnum {
    Alphabetical = "alphabetical",
    Date = "date"
}


export class GetVideoLikesAlt1QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetVideoLikesAlt1DirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetVideoLikesAlt1SortEnum;
}


export class GetVideoLikesAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVideoLikesAlt1PathParams;

  @SpeakeasyMetadata()
  queryParams: GetVideoLikesAlt1QueryParams;
}


export class GetVideoLikesAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.User })
  users?: shared.User[];
}
