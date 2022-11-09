import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CachePostRequest extends SpeakeasyBase {
    request: shared.CachePostRequest;
}
export declare class CachePostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    problemDetail?: any;
}
