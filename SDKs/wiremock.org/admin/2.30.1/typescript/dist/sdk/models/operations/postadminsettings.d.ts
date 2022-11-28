import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostAdminSettingsRequestBody extends SpeakeasyBase {
    fixedDelay?: number;
}
export declare class PostAdminSettingsRequest extends SpeakeasyBase {
    request: PostAdminSettingsRequestBody;
}
export declare class PostAdminSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
