import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPortfolioVideosAlt1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=portfolio_id" })
  portfolioId: number;
}

export enum GetPortfolioVideosAlt1FilterEnum {
    Embeddable = "embeddable"
}

export enum GetPortfolioVideosAlt1SortEnum {
    Alphabetical = "alphabetical"
,    Comments = "comments"
,    Date = "date"
,    Default = "default"
,    Likes = "likes"
,    Manual = "manual"
,    Plays = "plays"
}


export class GetPortfolioVideosAlt1QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=containing_uri" })
  containingUri?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetPortfolioVideosAlt1FilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter_embeddable" })
  filterEmbeddable?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetPortfolioVideosAlt1SortEnum;
}


export class GetPortfolioVideosAlt1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPortfolioVideosAlt1PathParams;

  @Metadata()
  queryParams: GetPortfolioVideosAlt1QueryParams;
}


export class GetPortfolioVideosAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Video })
  videos?: shared.Video[];
}
