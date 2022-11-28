import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPortfolioConstructionMimickingRequestBodyAssets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetReturns" })
  assetReturns: number[];
}


export class PostPortfolioConstructionMimickingRequestBodyConstraints extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetsGroups" })
  assetsGroups?: number[][];

  @SpeakeasyMetadata({ data: "json, name=assetsGroupsMatrix" })
  assetsGroupsMatrix?: number[][];

  @SpeakeasyMetadata({ data: "json, name=maximumAssetsGroupsWeights" })
  maximumAssetsGroupsWeights?: number[];

  @SpeakeasyMetadata({ data: "json, name=maximumAssetsWeights" })
  maximumAssetsWeights?: number[];

  @SpeakeasyMetadata({ data: "json, name=maximumPortfolioExposure" })
  maximumPortfolioExposure?: number;

  @SpeakeasyMetadata({ data: "json, name=minimumAssetsWeights" })
  minimumAssetsWeights?: number[];

  @SpeakeasyMetadata({ data: "json, name=minimumPortfolioExposure" })
  minimumPortfolioExposure?: number;
}


export class PostPortfolioConstructionMimickingRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets", elemType: PostPortfolioConstructionMimickingRequestBodyAssets })
  assets: PostPortfolioConstructionMimickingRequestBodyAssets[];

  @SpeakeasyMetadata({ data: "json, name=benchmarkReturns" })
  benchmarkReturns: number[];

  @SpeakeasyMetadata({ data: "json, name=constraints" })
  constraints?: PostPortfolioConstructionMimickingRequestBodyConstraints;
}


export class PostPortfolioConstructionMimicking200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetsWeights" })
  assetsWeights: number[];
}


export class PostPortfolioConstructionMimickingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostPortfolioConstructionMimickingRequestBody;
}


export class PostPortfolioConstructionMimickingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postPortfolioConstructionMimicking200ApplicationJsonObject?: PostPortfolioConstructionMimicking200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
