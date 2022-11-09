import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetTimezoneAreaLocationRegionTxtPathParams extends SpeakeasyBase {
    area: string;
    location: string;
    region: string;
}
export declare class GetTimezoneAreaLocationRegionTxtRequest extends SpeakeasyBase {
    pathParams: GetTimezoneAreaLocationRegionTxtPathParams;
}
export declare class GetTimezoneAreaLocationRegionTxtResponse extends SpeakeasyBase {
    contentType: string;
    dateTimeTextResponse?: string;
    errorTextResponse?: string;
    statusCode: number;
}
