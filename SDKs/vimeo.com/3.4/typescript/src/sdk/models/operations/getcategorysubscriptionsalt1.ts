import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetCategorySubscriptionsAlt1DirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum GetCategorySubscriptionsAlt1SortEnum {
    Alphabetical = "alphabetical",
    Date = "date",
    Name = "name"
}


export class GetCategorySubscriptionsAlt1QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetCategorySubscriptionsAlt1DirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetCategorySubscriptionsAlt1SortEnum;
}


export class GetCategorySubscriptionsAlt1Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetCategorySubscriptionsAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCategorySubscriptionsAlt1QueryParams;

  @SpeakeasyMetadata()
  security: GetCategorySubscriptionsAlt1Security;
}


export class GetCategorySubscriptionsAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Category })
  categories?: shared.Category[];

  @SpeakeasyMetadata()
  error?: shared.Error;
}
