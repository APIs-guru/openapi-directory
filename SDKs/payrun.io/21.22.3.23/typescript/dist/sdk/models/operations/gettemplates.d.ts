import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetTemplatesHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetTemplatesRequest extends SpeakeasyBase {
    headers: GetTemplatesHeaders;
}
export declare class GetTemplatesResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
