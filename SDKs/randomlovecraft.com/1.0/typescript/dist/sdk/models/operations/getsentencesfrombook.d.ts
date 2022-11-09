import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetSentencesFromBookPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSentencesFromBookQueryParams extends SpeakeasyBase {
    limit?: number;
}
export declare class GetSentencesFromBookRequest extends SpeakeasyBase {
    pathParams: GetSentencesFromBookPathParams;
    queryParams: GetSentencesFromBookQueryParams;
}
export declare class GetSentencesFromBook200ApplicationJson extends SpeakeasyBase {
    data?: shared.Sentence[];
}
export declare class GetSentencesFromBookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getSentencesFromBook200ApplicationJsonObject?: GetSentencesFromBook200ApplicationJson;
}
