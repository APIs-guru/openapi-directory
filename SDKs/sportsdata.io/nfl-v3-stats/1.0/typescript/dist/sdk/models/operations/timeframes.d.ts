import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class TimeframesPathParams extends SpeakeasyBase {
    format: string;
    type: string;
}
export declare class TimeframesRequest extends SpeakeasyBase {
    pathParams: TimeframesPathParams;
}
export declare class TimeframesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    timeframes?: any[];
}
