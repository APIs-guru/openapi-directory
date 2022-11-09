import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetErrorsSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetErrorsRequest extends SpeakeasyBase {
    security: GetErrorsSecurity;
}
export declare class GetErrorsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
