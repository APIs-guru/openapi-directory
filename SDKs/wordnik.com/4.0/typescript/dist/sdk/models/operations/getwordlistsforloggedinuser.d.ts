import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetWordListsForLoggedInUserQueryParams extends SpeakeasyBase {
    limit?: number;
    skip?: number;
}
export declare class GetWordListsForLoggedInUserHeaders extends SpeakeasyBase {
    authToken: string;
}
export declare class GetWordListsForLoggedInUserRequest extends SpeakeasyBase {
    queryParams: GetWordListsForLoggedInUserQueryParams;
    headers: GetWordListsForLoggedInUserHeaders;
}
export declare class GetWordListsForLoggedInUserResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
