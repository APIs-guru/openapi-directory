import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PostPhoneEnrichHeaders extends SpeakeasyBase {
    galaxyApName?: string;
    galaxyApPassword?: string;
    galaxySearchType?: string;
}
export declare class PostPhoneEnrichRequestBody extends SpeakeasyBase {
    phone?: string;
}
export declare class PostPhoneEnrichRequest extends SpeakeasyBase {
    headers: PostPhoneEnrichHeaders;
    request?: PostPhoneEnrichRequestBody;
}
export declare class PostPhoneEnrichResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
