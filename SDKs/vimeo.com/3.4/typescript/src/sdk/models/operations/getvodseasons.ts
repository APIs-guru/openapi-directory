import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVodSeasonsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ondemand_id" })
  ondemandId: number;
}

export enum GetVodSeasonsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum GetVodSeasonsFilterEnum {
    Viewable = "viewable"
}

export enum GetVodSeasonsSortEnum {
    Date = "date",
    Manual = "manual"
}


export class GetVodSeasonsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetVodSeasonsDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetVodSeasonsFilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetVodSeasonsSortEnum;
}


export class GetVodSeasonsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVodSeasonsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetVodSeasonsQueryParams;
}


export class GetVodSeasonsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;

  @SpeakeasyMetadata({ elemType: shared.OnDemandSeason })
  onDemandSeasons?: shared.OnDemandSeason[];
}
