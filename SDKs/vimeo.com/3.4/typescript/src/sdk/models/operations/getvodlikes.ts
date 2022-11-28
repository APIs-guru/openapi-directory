import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVodLikesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ondemand_id" })
  ondemandId: number;
}

export enum GetVodLikesDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum GetVodLikesFilterEnum {
    Extra = "extra",
    Main = "main",
    Trailer = "trailer"
}

export enum GetVodLikesSortEnum {
    Alphabetical = "alphabetical",
    Date = "date"
}


export class GetVodLikesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetVodLikesDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetVodLikesFilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetVodLikesSortEnum;
}


export class GetVodLikesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVodLikesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetVodLikesQueryParams;
}


export class GetVodLikesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.User })
  users?: shared.User[];
}
