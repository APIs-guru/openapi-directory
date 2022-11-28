import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WeekCurrentFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class WeekCurrentPathParams extends SpeakeasyBase {
    format: WeekCurrentFormatEnum;
}
export declare class WeekCurrentRequest extends SpeakeasyBase {
    pathParams: WeekCurrentPathParams;
}
export declare class WeekCurrentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    weekCurrent200ApplicationJsonInteger?: number;
}
