import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostApiSocialNumberQueryParams extends SpeakeasyBase {
    idType: shared.IdTypeEnum;
}
export declare class PostApiSocialNumberHeaders extends SpeakeasyBase {
    xApiKey?: string;
}
export declare class PostApiSocialNumberRequests extends SpeakeasyBase {
    numberValidation?: shared.NumberValidation;
    numberValidation1?: shared.NumberValidation;
    numberValidation2?: shared.NumberValidation;
    numberValidation3?: shared.NumberValidation;
}
export declare class PostApiSocialNumberRequest extends SpeakeasyBase {
    queryParams: PostApiSocialNumberQueryParams;
    headers: PostApiSocialNumberHeaders;
    request: PostApiSocialNumberRequests;
}
export declare class PostApiSocialNumberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
