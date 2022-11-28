import { SpeakeasyBase } from "../../../internal/utils";
export declare enum StandingsFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class StandingsPathParams extends SpeakeasyBase {
    format: StandingsFormatEnum;
    roundid: string;
}
export declare class StandingsRequest extends SpeakeasyBase {
    pathParams: StandingsPathParams;
}
export declare class StandingsResponse extends SpeakeasyBase {
    contentType: string;
    standings?: any[];
    statusCode: number;
}
