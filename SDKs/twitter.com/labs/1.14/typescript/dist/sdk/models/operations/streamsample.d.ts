import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StreamSampleQueryParams extends SpeakeasyBase {
    expansions?: shared.TweetExpansionsParamTypeEnum[][];
}
export declare class StreamSampleRequest extends SpeakeasyBase {
    queryParams: StreamSampleQueryParams;
}
export declare class StreamSampleResponse extends SpeakeasyBase {
    contentType: string;
    error?: any;
    problem?: any;
    statusCode: number;
    streamSample200ApplicationJsonObject?: Map<string, any>;
}
