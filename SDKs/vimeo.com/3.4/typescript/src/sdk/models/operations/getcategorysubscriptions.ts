import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCategorySubscriptionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}

export enum GetCategorySubscriptionsDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum GetCategorySubscriptionsSortEnum {
    Alphabetical = "alphabetical"
,    Date = "date"
,    Name = "name"
}


export class GetCategorySubscriptionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetCategorySubscriptionsDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetCategorySubscriptionsSortEnum;
}


export class GetCategorySubscriptionsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetCategorySubscriptionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCategorySubscriptionsPathParams;

  @Metadata()
  queryParams: GetCategorySubscriptionsQueryParams;

  @Metadata()
  security: GetCategorySubscriptionsSecurity;
}


export class GetCategorySubscriptionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Category })
  categories?: shared.Category[];

  @Metadata()
  error?: shared.Error;
}
