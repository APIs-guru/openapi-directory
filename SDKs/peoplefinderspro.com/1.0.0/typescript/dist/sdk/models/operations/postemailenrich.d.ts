import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PostEmailEnrichHeaders extends SpeakeasyBase {
    galaxyApName?: string;
    galaxyApPassword?: string;
    galaxySearchType?: string;
}
export declare class PostEmailEnrichRequestBody extends SpeakeasyBase {
    email?: string;
}
export declare class PostEmailEnrichRequest extends SpeakeasyBase {
    headers: PostEmailEnrichHeaders;
    request?: PostEmailEnrichRequestBody;
}
export declare class PostEmailEnrichResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
