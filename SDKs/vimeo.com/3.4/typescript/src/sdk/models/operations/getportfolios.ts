import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPortfoliosPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}

export enum GetPortfoliosDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum GetPortfoliosSortEnum {
    Alphabetical = "alphabetical"
,    Date = "date"
}


export class GetPortfoliosQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetPortfoliosDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetPortfoliosSortEnum;
}


export class GetPortfoliosRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPortfoliosPathParams;

  @Metadata()
  queryParams: GetPortfoliosQueryParams;
}


export class GetPortfoliosResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Portfolio })
  portfolios?: shared.Portfolio[];
}
