import { SpeakeasyBase } from "../../../internal/utils";
export declare class LookupQueryParams extends SpeakeasyBase {
    json?: string;
    number: string[];
    type: string;
}
export declare class LookupRequest extends SpeakeasyBase {
    queryParams: LookupQueryParams;
}
export declare class LookupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
