import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostApiTextHumanizeHeaders extends SpeakeasyBase {
    xApiKey?: string;
}
export declare class PostApiTextHumanizeRequests extends SpeakeasyBase {
    textDto?: shared.TextDto;
    textDto1?: shared.TextDto;
    textDto2?: shared.TextDto;
    textDto3?: shared.TextDto;
}
export declare class PostApiTextHumanizeRequest extends SpeakeasyBase {
    headers: PostApiTextHumanizeHeaders;
    request: PostApiTextHumanizeRequests;
}
export declare class PostApiTextHumanizeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
