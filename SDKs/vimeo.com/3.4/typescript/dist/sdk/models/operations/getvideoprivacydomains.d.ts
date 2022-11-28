import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVideoPrivacyDomainsPathParams extends SpeakeasyBase {
    videoId: number;
}
export declare class GetVideoPrivacyDomainsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class GetVideoPrivacyDomainsRequest extends SpeakeasyBase {
    pathParams: GetVideoPrivacyDomainsPathParams;
    queryParams: GetVideoPrivacyDomainsQueryParams;
}
export declare class GetVideoPrivacyDomainsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    domains?: shared.Domain[];
    legacyError?: shared.LegacyError;
}
