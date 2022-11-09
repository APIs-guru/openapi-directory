import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetVodSeasonsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ondemand_id" })
  ondemandId: number;
}

export enum GetVodSeasonsDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum GetVodSeasonsFilterEnum {
    Viewable = "viewable"
}

export enum GetVodSeasonsSortEnum {
    Date = "date"
,    Manual = "manual"
}


export class GetVodSeasonsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetVodSeasonsDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetVodSeasonsFilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetVodSeasonsSortEnum;
}


export class GetVodSeasonsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVodSeasonsPathParams;

  @Metadata()
  queryParams: GetVodSeasonsQueryParams;
}


export class GetVodSeasonsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;

  @Metadata({ elemType: shared.OnDemandSeason })
  onDemandSeasons?: shared.OnDemandSeason[];
}
