import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetTimezoneAreaLocationRegionPathParams extends SpeakeasyBase {
    area: string;
    location: string;
    region: string;
}
export declare class GetTimezoneAreaLocationRegionRequest extends SpeakeasyBase {
    pathParams: GetTimezoneAreaLocationRegionPathParams;
}
export declare class GetTimezoneAreaLocationRegionResponse extends SpeakeasyBase {
    contentType: string;
    dateTimeJsonResponse?: any;
    errorJsonResponse?: any;
    statusCode: number;
}
