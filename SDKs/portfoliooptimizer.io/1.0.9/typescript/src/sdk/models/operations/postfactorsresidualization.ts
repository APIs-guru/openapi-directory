import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostFactorsResidualizationRequestBodyFactors extends SpeakeasyBase {
  @Metadata({ data: "json, name=factorReturns" })
  factorReturns: number[];
}


export class PostFactorsResidualizationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=factors", elemType: operations.PostFactorsResidualizationRequestBodyFactors })
  factors: PostFactorsResidualizationRequestBodyFactors[];

  @Metadata({ data: "json, name=residualizedFactor" })
  residualizedFactor: number;
}


export class PostFactorsResidualizationRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostFactorsResidualizationRequestBody;
}


export class PostFactorsResidualization200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=residualizedFactorReturns" })
  residualizedFactorReturns: number[];
}


export class PostFactorsResidualizationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postFactorsResidualization200ApplicationJsonObject?: PostFactorsResidualization200ApplicationJson;

  @Metadata()
  statusCode: number;
}
