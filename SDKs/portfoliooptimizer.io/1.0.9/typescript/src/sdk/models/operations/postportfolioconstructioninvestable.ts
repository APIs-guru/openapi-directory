import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPortfolioConstructionInvestableRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets" })
  assets: number;

  @Metadata({ data: "json, name=assetsGroups" })
  assetsGroups?: number[][];

  @Metadata({ data: "json, name=assetsGroupsWeights" })
  assetsGroupsWeights?: number[];

  @Metadata({ data: "json, name=assetsMinimumNotionalValues" })
  assetsMinimumNotionalValues?: number[];

  @Metadata({ data: "json, name=assetsMinimumPositions" })
  assetsMinimumPositions?: number[];

  @Metadata({ data: "json, name=assetsPrices" })
  assetsPrices: number[];

  @Metadata({ data: "json, name=assetsSizeLots" })
  assetsSizeLots?: number[];

  @Metadata({ data: "json, name=assetsWeights" })
  assetsWeights?: number[];

  @Metadata({ data: "json, name=maximumAssetsGroupsWeights" })
  maximumAssetsGroupsWeights?: number[];

  @Metadata({ data: "json, name=portfolioValue" })
  portfolioValue: number;
}


export class PostPortfolioConstructionInvestableRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostPortfolioConstructionInvestableRequestBody;
}


export class PostPortfolioConstructionInvestable200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetsPositions" })
  assetsPositions: number[];

  @Metadata({ data: "json, name=assetsWeights" })
  assetsWeights: number[];
}


export class PostPortfolioConstructionInvestableResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postPortfolioConstructionInvestable200ApplicationJsonObject?: PostPortfolioConstructionInvestable200ApplicationJson;

  @Metadata()
  statusCode: number;
}
