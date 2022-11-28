import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTimezoneAreaLocationPathParams extends SpeakeasyBase {
    area: string;
    location: string;
}
export declare class GetTimezoneAreaLocationRequest extends SpeakeasyBase {
    pathParams: GetTimezoneAreaLocationPathParams;
}
export declare class GetTimezoneAreaLocationResponse extends SpeakeasyBase {
    contentType: string;
    dateTimeJsonResponse?: any;
    errorJsonResponse?: any;
    statusCode: number;
}
