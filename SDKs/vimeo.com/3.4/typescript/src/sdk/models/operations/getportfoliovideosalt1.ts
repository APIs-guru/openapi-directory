import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPortfolioVideosAlt1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=portfolio_id" })
  portfolioId: number;
}

export enum GetPortfolioVideosAlt1FilterEnum {
    Embeddable = "embeddable"
}

export enum GetPortfolioVideosAlt1SortEnum {
    Alphabetical = "alphabetical",
    Comments = "comments",
    Date = "date",
    Default = "default",
    Likes = "likes",
    Manual = "manual",
    Plays = "plays"
}


export class GetPortfolioVideosAlt1QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=containing_uri" })
  containingUri?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetPortfolioVideosAlt1FilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_embeddable" })
  filterEmbeddable?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetPortfolioVideosAlt1SortEnum;
}


export class GetPortfolioVideosAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPortfolioVideosAlt1PathParams;

  @SpeakeasyMetadata()
  queryParams: GetPortfolioVideosAlt1QueryParams;
}


export class GetPortfolioVideosAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Video })
  videos?: shared.Video[];
}
