import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPortfolioConstructionRandomRequestBodyConstraints extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maximumAssetsWeights" })
  maximumAssetsWeights?: number[];

  @SpeakeasyMetadata({ data: "json, name=maximumPortfolioExposure" })
  maximumPortfolioExposure?: number;

  @SpeakeasyMetadata({ data: "json, name=minimumAssetsWeights" })
  minimumAssetsWeights?: number[];

  @SpeakeasyMetadata({ data: "json, name=minimumPortfolioExposure" })
  minimumPortfolioExposure?: number;
}


export class PostPortfolioConstructionRandomRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets" })
  assets: number;

  @SpeakeasyMetadata({ data: "json, name=constraints" })
  constraints?: PostPortfolioConstructionRandomRequestBodyConstraints;

  @SpeakeasyMetadata({ data: "json, name=portfolios" })
  portfolios?: number;
}


export class PostPortfolioConstructionRandom200ApplicationJsonPortfolios extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetsWeights" })
  assetsWeights: number[];
}


export class PostPortfolioConstructionRandom200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portfolios", elemType: PostPortfolioConstructionRandom200ApplicationJsonPortfolios })
  portfolios: PostPortfolioConstructionRandom200ApplicationJsonPortfolios[];
}


export class PostPortfolioConstructionRandomRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostPortfolioConstructionRandomRequestBody;
}


export class PostPortfolioConstructionRandomResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postPortfolioConstructionRandom200ApplicationJsonObject?: PostPortfolioConstructionRandom200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
