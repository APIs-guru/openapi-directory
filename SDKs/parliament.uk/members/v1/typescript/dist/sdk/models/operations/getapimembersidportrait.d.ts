import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetApiMembersIdPortraitPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetApiMembersIdPortraitQueryParams extends SpeakeasyBase {
    cropType?: number;
    webVersion?: boolean;
}
export declare class GetApiMembersIdPortraitRequest extends SpeakeasyBase {
    pathParams: GetApiMembersIdPortraitPathParams;
    queryParams: GetApiMembersIdPortraitQueryParams;
}
export declare class GetApiMembersIdPortraitResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
