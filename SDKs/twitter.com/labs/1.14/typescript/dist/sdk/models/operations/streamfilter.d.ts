import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StreamFilterQueryParams extends SpeakeasyBase {
    expansions?: shared.TweetExpansionsParamTypeEnum[][];
}
export declare class StreamFilterRequest extends SpeakeasyBase {
    queryParams: StreamFilterQueryParams;
}
export declare class StreamFilterResponse extends SpeakeasyBase {
    contentType: string;
    error?: any;
    problem?: any;
    statusCode: number;
    streamFilter200ApplicationJsonObject?: Map<string, any>;
}
