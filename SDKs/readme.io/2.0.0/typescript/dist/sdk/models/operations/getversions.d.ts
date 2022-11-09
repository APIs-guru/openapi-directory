import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetVersionsSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetVersionsRequest extends SpeakeasyBase {
    security: GetVersionsSecurity;
}
export declare class GetVersionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
