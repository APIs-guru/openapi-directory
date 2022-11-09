import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetCategorySubscriptionsAlt1DirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum GetCategorySubscriptionsAlt1SortEnum {
    Alphabetical = "alphabetical"
,    Date = "date"
,    Name = "name"
}


export class GetCategorySubscriptionsAlt1QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetCategorySubscriptionsAlt1DirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetCategorySubscriptionsAlt1SortEnum;
}


export class GetCategorySubscriptionsAlt1Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetCategorySubscriptionsAlt1Request extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCategorySubscriptionsAlt1QueryParams;

  @Metadata()
  security: GetCategorySubscriptionsAlt1Security;
}


export class GetCategorySubscriptionsAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Category })
  categories?: shared.Category[];

  @Metadata()
  error?: shared.Error;
}
