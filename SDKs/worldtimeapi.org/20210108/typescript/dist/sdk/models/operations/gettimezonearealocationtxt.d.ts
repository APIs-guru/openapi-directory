import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTimezoneAreaLocationTxtPathParams extends SpeakeasyBase {
    area: string;
    location: string;
}
export declare class GetTimezoneAreaLocationTxtRequest extends SpeakeasyBase {
    pathParams: GetTimezoneAreaLocationTxtPathParams;
}
export declare class GetTimezoneAreaLocationTxtResponse extends SpeakeasyBase {
    contentType: string;
    dateTimeTextResponse?: string;
    errorTextResponse?: string;
    statusCode: number;
}
