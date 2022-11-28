import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPortfolioConstructionInvestableRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets" })
  assets: number;

  @SpeakeasyMetadata({ data: "json, name=assetsGroups" })
  assetsGroups?: number[][];

  @SpeakeasyMetadata({ data: "json, name=assetsGroupsWeights" })
  assetsGroupsWeights?: number[];

  @SpeakeasyMetadata({ data: "json, name=assetsMinimumNotionalValues" })
  assetsMinimumNotionalValues?: number[];

  @SpeakeasyMetadata({ data: "json, name=assetsMinimumPositions" })
  assetsMinimumPositions?: number[];

  @SpeakeasyMetadata({ data: "json, name=assetsPrices" })
  assetsPrices: number[];

  @SpeakeasyMetadata({ data: "json, name=assetsSizeLots" })
  assetsSizeLots?: number[];

  @SpeakeasyMetadata({ data: "json, name=assetsWeights" })
  assetsWeights?: number[];

  @SpeakeasyMetadata({ data: "json, name=maximumAssetsGroupsWeights" })
  maximumAssetsGroupsWeights?: number[];

  @SpeakeasyMetadata({ data: "json, name=portfolioValue" })
  portfolioValue: number;
}


export class PostPortfolioConstructionInvestable200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetsPositions" })
  assetsPositions: number[];

  @SpeakeasyMetadata({ data: "json, name=assetsWeights" })
  assetsWeights: number[];
}


export class PostPortfolioConstructionInvestableRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostPortfolioConstructionInvestableRequestBody;
}


export class PostPortfolioConstructionInvestableResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postPortfolioConstructionInvestable200ApplicationJsonObject?: PostPortfolioConstructionInvestable200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
