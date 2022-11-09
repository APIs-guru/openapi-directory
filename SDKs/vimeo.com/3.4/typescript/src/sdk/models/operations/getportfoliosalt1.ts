import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetPortfoliosAlt1DirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum GetPortfoliosAlt1SortEnum {
    Alphabetical = "alphabetical"
,    Date = "date"
}


export class GetPortfoliosAlt1QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetPortfoliosAlt1DirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetPortfoliosAlt1SortEnum;
}


export class GetPortfoliosAlt1Request extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPortfoliosAlt1QueryParams;
}


export class GetPortfoliosAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Portfolio })
  portfolios?: shared.Portfolio[];
}
