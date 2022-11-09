import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class WeekCurrentPathParams extends SpeakeasyBase {
    format: string;
}
export declare class WeekCurrentRequest extends SpeakeasyBase {
    pathParams: WeekCurrentPathParams;
}
export declare class WeekCurrentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    weekCurrent200ApplicationJsonInteger?: number;
}
