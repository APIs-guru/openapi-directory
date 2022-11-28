import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CancellationReasonsServerList: readonly ["https://api.sandbox.viator.com/partner"];
export declare class CancellationReasonsHeaders extends SpeakeasyBase {
    acceptLanguage: string;
}
export declare class CancellationReasonsRequest extends SpeakeasyBase {
    serverUrl?: string;
    headers: CancellationReasonsHeaders;
}
export declare class CancellationReasonsResponse extends SpeakeasyBase {
    fourHundredAndOneUnauthorized?: shared.FourHundredAndOneUnauthorized;
    fourHundredAndSixNotAcceptable?: shared.FourHundredAndSixNotAcceptable;
    fiveHundredInternalServerError?: shared.FiveHundredInternalServerError;
    fiveHundredAndThreeServiceUnavailable?: shared.FiveHundredAndThreeServiceUnavailable;
    cancellationReasonsResponses?: shared.CancellationReasonsResponse[];
    contentType: string;
    statusCode: number;
}
