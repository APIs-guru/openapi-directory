import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostAddressAutocompleteHeaders extends SpeakeasyBase {
    galaxyApName?: string;
    galaxyApPassword?: string;
    galaxySearchType?: string;
}
export declare class PostAddressAutocompleteRequestBody extends SpeakeasyBase {
    input?: string;
}
export declare class PostAddressAutocompleteRequest extends SpeakeasyBase {
    headers: PostAddressAutocompleteHeaders;
    request?: PostAddressAutocompleteRequestBody;
}
export declare class PostAddressAutocompleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
