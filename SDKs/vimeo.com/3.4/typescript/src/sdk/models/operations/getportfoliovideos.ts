import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPortfolioVideosPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=portfolio_id" })
  portfolioId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}

export enum GetPortfolioVideosFilterEnum {
    Embeddable = "embeddable"
}

export enum GetPortfolioVideosSortEnum {
    Alphabetical = "alphabetical"
,    Comments = "comments"
,    Date = "date"
,    Default = "default"
,    Likes = "likes"
,    Manual = "manual"
,    Plays = "plays"
}


export class GetPortfolioVideosQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=containing_uri" })
  containingUri?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetPortfolioVideosFilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter_embeddable" })
  filterEmbeddable?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetPortfolioVideosSortEnum;
}


export class GetPortfolioVideosRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPortfolioVideosPathParams;

  @Metadata()
  queryParams: GetPortfolioVideosQueryParams;
}


export class GetPortfolioVideosResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Video })
  videos?: shared.Video[];
}
