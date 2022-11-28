import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCheckPathParams extends SpeakeasyBase {
    checkId: string;
}
export declare class GetCheckSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetCheckRequest extends SpeakeasyBase {
    pathParams: GetCheckPathParams;
    security: GetCheckSecurity;
}
export declare class GetCheckResponse extends SpeakeasyBase {
    checkOutput?: shared.CheckOutput;
    contentType: string;
    error?: any;
    statusCode: number;
}
