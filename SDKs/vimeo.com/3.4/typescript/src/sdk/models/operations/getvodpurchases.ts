import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetVodPurchasesDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum GetVodPurchasesFilterEnum {
    All = "all"
,    ExpiringSoon = "expiring_soon"
,    Film = "film"
,    Important = "important"
,    Purchased = "purchased"
,    Rented = "rented"
,    Series = "series"
,    Subscription = "subscription"
,    Unwatched = "unwatched"
,    Watched = "watched"
}

export enum GetVodPurchasesSortEnum {
    Added = "added"
,    Alphabetical = "alphabetical"
,    Date = "date"
,    Name = "name"
,    PurchaseTime = "purchase_time"
,    Rating = "rating"
,    ReleaseDate = "release_date"
}


export class GetVodPurchasesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetVodPurchasesDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetVodPurchasesFilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetVodPurchasesSortEnum;
}


export class GetVodPurchasesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetVodPurchasesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetVodPurchasesQueryParams;

  @Metadata()
  security: GetVodPurchasesSecurity;
}


export class GetVodPurchasesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;

  @Metadata({ elemType: shared.OnDemandPage })
  onDemandPages?: shared.OnDemandPage[];
}
