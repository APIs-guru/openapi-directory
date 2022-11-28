import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostFactorsResidualizationRequestBodyFactors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=factorReturns" })
  factorReturns: number[];
}


export class PostFactorsResidualizationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=factors", elemType: PostFactorsResidualizationRequestBodyFactors })
  factors: PostFactorsResidualizationRequestBodyFactors[];

  @SpeakeasyMetadata({ data: "json, name=residualizedFactor" })
  residualizedFactor: number;
}


export class PostFactorsResidualization200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=residualizedFactorReturns" })
  residualizedFactorReturns: number[];
}


export class PostFactorsResidualizationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostFactorsResidualizationRequestBody;
}


export class PostFactorsResidualizationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postFactorsResidualization200ApplicationJsonObject?: PostFactorsResidualization200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
