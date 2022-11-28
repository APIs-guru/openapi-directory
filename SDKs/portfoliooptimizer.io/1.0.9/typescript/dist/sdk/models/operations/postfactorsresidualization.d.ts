import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostFactorsResidualizationRequestBodyFactors extends SpeakeasyBase {
    factorReturns: number[];
}
export declare class PostFactorsResidualizationRequestBody extends SpeakeasyBase {
    factors: PostFactorsResidualizationRequestBodyFactors[];
    residualizedFactor: number;
}
export declare class PostFactorsResidualization200ApplicationJson extends SpeakeasyBase {
    residualizedFactorReturns: number[];
}
export declare class PostFactorsResidualizationRequest extends SpeakeasyBase {
    request: PostFactorsResidualizationRequestBody;
}
export declare class PostFactorsResidualizationResponse extends SpeakeasyBase {
    contentType: string;
    postFactorsResidualization200ApplicationJsonObject?: PostFactorsResidualization200ApplicationJson;
    statusCode: number;
}
