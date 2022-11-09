import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostApiTextTransformQueryParams extends SpeakeasyBase {
    caseType?: shared.CaseTypeEnum;
    find?: string;
    replace?: string;
    textActionType: shared.TextActionTypeEnum;
}
export declare class PostApiTextTransformHeaders extends SpeakeasyBase {
    xApiKey?: string;
}
export declare class PostApiTextTransformRequests extends SpeakeasyBase {
    textDto?: shared.TextDto;
    textDto1?: shared.TextDto;
    textDto2?: shared.TextDto;
    textDto3?: shared.TextDto;
}
export declare class PostApiTextTransformRequest extends SpeakeasyBase {
    queryParams: PostApiTextTransformQueryParams;
    headers: PostApiTextTransformHeaders;
    request: PostApiTextTransformRequests;
}
export declare class PostApiTextTransformResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
