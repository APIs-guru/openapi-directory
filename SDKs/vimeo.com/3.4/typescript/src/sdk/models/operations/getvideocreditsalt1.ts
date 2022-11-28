import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVideoCreditsAlt1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}

export enum GetVideoCreditsAlt1DirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum GetVideoCreditsAlt1SortEnum {
    Alphabetical = "alphabetical",
    Date = "date"
}


export class GetVideoCreditsAlt1QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetVideoCreditsAlt1DirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetVideoCreditsAlt1SortEnum;
}


export class GetVideoCreditsAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVideoCreditsAlt1PathParams;

  @SpeakeasyMetadata()
  queryParams: GetVideoCreditsAlt1QueryParams;
}


export class GetVideoCreditsAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Credit })
  credits?: shared.Credit[];
}
