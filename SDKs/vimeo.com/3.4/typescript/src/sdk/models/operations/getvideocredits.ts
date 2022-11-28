import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVideoCreditsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}

export enum GetVideoCreditsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum GetVideoCreditsSortEnum {
    Alphabetical = "alphabetical",
    Date = "date"
}


export class GetVideoCreditsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetVideoCreditsDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetVideoCreditsSortEnum;
}


export class GetVideoCreditsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVideoCreditsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetVideoCreditsQueryParams;
}


export class GetVideoCreditsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Credit })
  credits?: shared.Credit[];
}
