import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostGraphQlRequest extends SpeakeasyBase {
    request: shared.GraphQlRequest;
}
export declare class PostGraphQlResponse extends SpeakeasyBase {
    contentType: string;
    graphQlResponse?: shared.GraphQlResponse;
    statusCode: number;
}
