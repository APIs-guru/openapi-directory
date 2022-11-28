import { SpeakeasyBase } from "../../../internal/utils";
export declare enum StandingsFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class StandingsPathParams extends SpeakeasyBase {
    format: StandingsFormatEnum;
    season: string;
}
export declare class StandingsRequest extends SpeakeasyBase {
    pathParams: StandingsPathParams;
}
export declare class StandingsResponse extends SpeakeasyBase {
    contentType: string;
    standings?: any[];
    statusCode: number;
}
