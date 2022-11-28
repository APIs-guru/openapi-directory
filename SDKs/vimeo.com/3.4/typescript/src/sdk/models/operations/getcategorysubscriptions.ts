import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCategorySubscriptionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}

export enum GetCategorySubscriptionsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum GetCategorySubscriptionsSortEnum {
    Alphabetical = "alphabetical",
    Date = "date",
    Name = "name"
}


export class GetCategorySubscriptionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetCategorySubscriptionsDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetCategorySubscriptionsSortEnum;
}


export class GetCategorySubscriptionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetCategorySubscriptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCategorySubscriptionsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCategorySubscriptionsQueryParams;

  @SpeakeasyMetadata()
  security: GetCategorySubscriptionsSecurity;
}


export class GetCategorySubscriptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Category })
  categories?: shared.Category[];

  @SpeakeasyMetadata()
  error?: shared.Error;
}
