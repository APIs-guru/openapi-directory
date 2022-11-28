import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSentencesQueryParams extends SpeakeasyBase {
    limit?: number;
}
export declare class GetSentences200ApplicationJson extends SpeakeasyBase {
    data?: shared.Sentence[];
}
export declare class GetSentencesRequest extends SpeakeasyBase {
    queryParams: GetSentencesQueryParams;
}
export declare class GetSentencesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getSentences200ApplicationJsonObject?: GetSentences200ApplicationJson;
}
