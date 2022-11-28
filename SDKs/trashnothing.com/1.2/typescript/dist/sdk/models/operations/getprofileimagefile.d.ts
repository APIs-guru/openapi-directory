import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetProfileImageFilePathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GetProfileImageFileQueryParams extends SpeakeasyBase {
    default?: string;
}
export declare class GetProfileImageFileRequest extends SpeakeasyBase {
    pathParams: GetProfileImageFilePathParams;
    queryParams: GetProfileImageFileQueryParams;
}
export declare class GetProfileImageFileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
