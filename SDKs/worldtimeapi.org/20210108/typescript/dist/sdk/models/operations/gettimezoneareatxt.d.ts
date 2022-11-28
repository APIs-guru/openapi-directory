import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTimezoneAreaTxtPathParams extends SpeakeasyBase {
    area: string;
}
export declare class GetTimezoneAreaTxtRequest extends SpeakeasyBase {
    pathParams: GetTimezoneAreaTxtPathParams;
}
export declare class GetTimezoneAreaTxtResponse extends SpeakeasyBase {
    contentType: string;
    errorTextResponse?: string;
    listTextResponse?: string;
    statusCode: number;
}
