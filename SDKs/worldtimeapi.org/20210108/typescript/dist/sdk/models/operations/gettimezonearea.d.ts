import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTimezoneAreaPathParams extends SpeakeasyBase {
    area: string;
}
export declare class GetTimezoneAreaRequest extends SpeakeasyBase {
    pathParams: GetTimezoneAreaPathParams;
}
export declare class GetTimezoneAreaResponse extends SpeakeasyBase {
    contentType: string;
    errorJsonResponse?: any;
    listJsonResponse?: string[];
    statusCode: number;
}
