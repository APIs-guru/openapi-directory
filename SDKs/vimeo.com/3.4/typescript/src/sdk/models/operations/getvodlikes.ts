import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetVodLikesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ondemand_id" })
  ondemandId: number;
}

export enum GetVodLikesDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum GetVodLikesFilterEnum {
    Extra = "extra"
,    Main = "main"
,    Trailer = "trailer"
}

export enum GetVodLikesSortEnum {
    Alphabetical = "alphabetical"
,    Date = "date"
}


export class GetVodLikesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetVodLikesDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetVodLikesFilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetVodLikesSortEnum;
}


export class GetVodLikesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVodLikesPathParams;

  @Metadata()
  queryParams: GetVodLikesQueryParams;
}


export class GetVodLikesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.User })
  users?: shared.User[];
}
