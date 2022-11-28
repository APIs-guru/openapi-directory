import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetVodPurchasesDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum GetVodPurchasesFilterEnum {
    All = "all",
    ExpiringSoon = "expiring_soon",
    Film = "film",
    Important = "important",
    Purchased = "purchased",
    Rented = "rented",
    Series = "series",
    Subscription = "subscription",
    Unwatched = "unwatched",
    Watched = "watched"
}

export enum GetVodPurchasesSortEnum {
    Added = "added",
    Alphabetical = "alphabetical",
    Date = "date",
    Name = "name",
    PurchaseTime = "purchase_time",
    Rating = "rating",
    ReleaseDate = "release_date"
}


export class GetVodPurchasesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetVodPurchasesDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetVodPurchasesFilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetVodPurchasesSortEnum;
}


export class GetVodPurchasesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetVodPurchasesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetVodPurchasesQueryParams;

  @SpeakeasyMetadata()
  security: GetVodPurchasesSecurity;
}


export class GetVodPurchasesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;

  @SpeakeasyMetadata({ elemType: shared.OnDemandPage })
  onDemandPages?: shared.OnDemandPage[];
}
