import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVideoLikesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}

export enum GetVideoLikesDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum GetVideoLikesSortEnum {
    Alphabetical = "alphabetical",
    Date = "date"
}


export class GetVideoLikesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetVideoLikesDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetVideoLikesSortEnum;
}


export class GetVideoLikesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVideoLikesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetVideoLikesQueryParams;
}


export class GetVideoLikesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.User })
  users?: shared.User[];
}
