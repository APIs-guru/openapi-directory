import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchTrustedCommsBrandsInformationServerList: readonly ["https://preview.twilio.com"];
export declare class FetchTrustedCommsBrandsInformationHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class FetchTrustedCommsBrandsInformationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchTrustedCommsBrandsInformationRequest extends SpeakeasyBase {
    serverUrl?: string;
    headers: FetchTrustedCommsBrandsInformationHeaders;
    security: FetchTrustedCommsBrandsInformationSecurity;
}
export declare class FetchTrustedCommsBrandsInformationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewTrustedCommsBrandsInformation?: shared.PreviewTrustedCommsBrandsInformation;
}
