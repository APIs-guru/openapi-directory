import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SeasonCurrentPathParams extends SpeakeasyBase {
    format: string;
}
export declare class SeasonCurrentRequest extends SpeakeasyBase {
    pathParams: SeasonCurrentPathParams;
}
export declare class SeasonCurrentResponse extends SpeakeasyBase {
    contentType: string;
    seasonCurrent200ApplicationJsonInteger?: number;
    statusCode: number;
}
