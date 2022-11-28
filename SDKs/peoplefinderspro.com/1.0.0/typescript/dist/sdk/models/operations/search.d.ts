import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchHeaders extends SpeakeasyBase {
    galaxyApName?: string;
    galaxyApPassword?: string;
    galaxySearchType?: string;
}
export declare class SearchRequestBodyAddress extends SpeakeasyBase {
    addressLine1?: string;
    addressLine2?: string;
}
export declare class SearchRequestBody extends SpeakeasyBase {
    address?: SearchRequestBodyAddress;
    age?: number;
    dob?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    middleName?: string;
    phoneNumber?: string;
}
export declare class SearchRequest extends SpeakeasyBase {
    headers: SearchHeaders;
    request?: SearchRequestBody;
}
export declare class SearchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
