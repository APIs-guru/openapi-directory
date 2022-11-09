import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ByeWeeksPathParams extends SpeakeasyBase {
    format: string;
    season: string;
}
export declare class ByeWeeksRequest extends SpeakeasyBase {
    pathParams: ByeWeeksPathParams;
}
export declare class ByeWeeksResponse extends SpeakeasyBase {
    byes?: any[];
    contentType: string;
    statusCode: number;
}
