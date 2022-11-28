import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApplicationGetRequest extends SpeakeasyBase {
    request: shared.ApplicationGetRequest;
}
export declare class ApplicationGetResponse extends SpeakeasyBase {
    applicationGetResponse?: shared.ApplicationGetResponse;
    contentType: string;
    error?: Map<string, any>;
    statusCode: number;
}
