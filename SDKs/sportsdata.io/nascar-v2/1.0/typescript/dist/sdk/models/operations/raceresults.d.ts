import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum RaceResultsFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class RaceResultsPathParams extends SpeakeasyBase {
    format: RaceResultsFormatEnum;
    raceid: string;
}
export declare class RaceResultsRequest extends SpeakeasyBase {
    pathParams: RaceResultsPathParams;
}
export declare class RaceResultsResponse extends SpeakeasyBase {
    contentType: string;
    raceResult?: any;
    statusCode: number;
}
