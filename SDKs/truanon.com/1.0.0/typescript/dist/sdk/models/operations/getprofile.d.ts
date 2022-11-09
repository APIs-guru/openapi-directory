import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetProfileQueryParams extends SpeakeasyBase {
    id?: string;
    service?: string;
}
export declare class GetProfileRequest extends SpeakeasyBase {
    queryParams: GetProfileQueryParams;
}
export declare class GetProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
