import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetShopsSlugPathParams extends SpeakeasyBase {
    slug: string;
}
export declare class GetShopsSlugQueryParams extends SpeakeasyBase {
    includeListingCount?: boolean;
}
export declare class GetShopsSlugRequest extends SpeakeasyBase {
    pathParams: GetShopsSlugPathParams;
    queryParams: GetShopsSlugQueryParams;
}
export declare class GetShopsSlugResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
