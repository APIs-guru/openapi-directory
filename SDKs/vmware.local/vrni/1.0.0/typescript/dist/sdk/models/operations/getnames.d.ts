import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNamesSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetNamesRequest extends SpeakeasyBase {
    request: shared.NamesRequest;
    security: GetNamesSecurity;
}
export declare class GetNamesResponse extends SpeakeasyBase {
    contentType: string;
    namesResponse?: shared.NamesResponse;
    statusCode: number;
}
