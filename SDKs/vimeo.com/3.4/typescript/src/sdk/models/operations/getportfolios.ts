import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPortfoliosPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}

export enum GetPortfoliosDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum GetPortfoliosSortEnum {
    Alphabetical = "alphabetical",
    Date = "date"
}


export class GetPortfoliosQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetPortfoliosDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetPortfoliosSortEnum;
}


export class GetPortfoliosRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPortfoliosPathParams;

  @SpeakeasyMetadata()
  queryParams: GetPortfoliosQueryParams;
}


export class GetPortfoliosResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Portfolio })
  portfolios?: shared.Portfolio[];
}
