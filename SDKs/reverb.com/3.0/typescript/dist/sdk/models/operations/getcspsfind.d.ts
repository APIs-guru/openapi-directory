import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetCspsFindQueryParams extends SpeakeasyBase {
    id?: string;
    slug?: string;
}
export declare class GetCspsFindRequest extends SpeakeasyBase {
    queryParams: GetCspsFindQueryParams;
}
export declare class GetCspsFindResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
