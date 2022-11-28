import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostApiV1UserSubscriptionsQueryParams extends SpeakeasyBase {
    email?: string;
}
export declare class PostApiV1UserSubscriptionsRequest extends SpeakeasyBase {
    queryParams: PostApiV1UserSubscriptionsQueryParams;
}
export declare class PostApiV1UserSubscriptionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
