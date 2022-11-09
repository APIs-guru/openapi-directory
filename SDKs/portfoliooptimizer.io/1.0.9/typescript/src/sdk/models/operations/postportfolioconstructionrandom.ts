import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPortfolioConstructionRandomRequestBodyConstraints extends SpeakeasyBase {
  @Metadata({ data: "json, name=maximumAssetsWeights" })
  maximumAssetsWeights?: number[];

  @Metadata({ data: "json, name=maximumPortfolioExposure" })
  maximumPortfolioExposure?: number;

  @Metadata({ data: "json, name=minimumAssetsWeights" })
  minimumAssetsWeights?: number[];

  @Metadata({ data: "json, name=minimumPortfolioExposure" })
  minimumPortfolioExposure?: number;
}


export class PostPortfolioConstructionRandomRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets" })
  assets: number;

  @Metadata({ data: "json, name=constraints" })
  constraints?: PostPortfolioConstructionRandomRequestBodyConstraints;

  @Metadata({ data: "json, name=portfolios" })
  portfolios?: number;
}


export class PostPortfolioConstructionRandomRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostPortfolioConstructionRandomRequestBody;
}


export class PostPortfolioConstructionRandom200ApplicationJsonPortfolios extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetsWeights" })
  assetsWeights: number[];
}


export class PostPortfolioConstructionRandom200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=portfolios", elemType: operations.PostPortfolioConstructionRandom200ApplicationJsonPortfolios })
  portfolios: PostPortfolioConstructionRandom200ApplicationJsonPortfolios[];
}


export class PostPortfolioConstructionRandomResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postPortfolioConstructionRandom200ApplicationJsonObject?: PostPortfolioConstructionRandom200ApplicationJson;

  @Metadata()
  statusCode: number;
}
