import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPortfolioConstructionMimickingRequestBodyAssets extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetReturns" })
  assetReturns: number[];
}


export class PostPortfolioConstructionMimickingRequestBodyConstraints extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetsGroups" })
  assetsGroups?: number[][];

  @Metadata({ data: "json, name=assetsGroupsMatrix" })
  assetsGroupsMatrix?: number[][];

  @Metadata({ data: "json, name=maximumAssetsGroupsWeights" })
  maximumAssetsGroupsWeights?: number[];

  @Metadata({ data: "json, name=maximumAssetsWeights" })
  maximumAssetsWeights?: number[];

  @Metadata({ data: "json, name=maximumPortfolioExposure" })
  maximumPortfolioExposure?: number;

  @Metadata({ data: "json, name=minimumAssetsWeights" })
  minimumAssetsWeights?: number[];

  @Metadata({ data: "json, name=minimumPortfolioExposure" })
  minimumPortfolioExposure?: number;
}


export class PostPortfolioConstructionMimickingRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets", elemType: operations.PostPortfolioConstructionMimickingRequestBodyAssets })
  assets: PostPortfolioConstructionMimickingRequestBodyAssets[];

  @Metadata({ data: "json, name=benchmarkReturns" })
  benchmarkReturns: number[];

  @Metadata({ data: "json, name=constraints" })
  constraints?: PostPortfolioConstructionMimickingRequestBodyConstraints;
}


export class PostPortfolioConstructionMimickingRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostPortfolioConstructionMimickingRequestBody;
}


export class PostPortfolioConstructionMimicking200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetsWeights" })
  assetsWeights: number[];
}


export class PostPortfolioConstructionMimickingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postPortfolioConstructionMimicking200ApplicationJsonObject?: PostPortfolioConstructionMimicking200ApplicationJson;

  @Metadata()
  statusCode: number;
}
