import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTokenQueryParams extends SpeakeasyBase {
    id?: string;
    service?: string;
}
export declare class GetTokenRequest extends SpeakeasyBase {
    queryParams: GetTokenQueryParams;
}
export declare class GetTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
