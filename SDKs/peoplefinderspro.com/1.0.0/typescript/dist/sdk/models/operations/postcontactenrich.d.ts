import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PostContactEnrichHeaders extends SpeakeasyBase {
    galaxyApName?: string;
    galaxyApPassword?: string;
    galaxySearchType?: string;
}
export declare class PostContactEnrichRequestBodyAddress extends SpeakeasyBase {
    addressLine1?: string;
    addressLine2?: string;
}
export declare class PostContactEnrichRequestBody extends SpeakeasyBase {
    address?: PostContactEnrichRequestBodyAddress;
    age?: number;
    dob?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    middleName?: string;
    phoneNumber?: string;
}
export declare class PostContactEnrichRequest extends SpeakeasyBase {
    headers: PostContactEnrichHeaders;
    request?: PostContactEnrichRequestBody;
}
export declare class PostContactEnrichResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
