import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LineCombinationsBySeasonFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class LineCombinationsBySeasonPathParams extends SpeakeasyBase {
    format: LineCombinationsBySeasonFormatEnum;
    season: string;
}
export declare class LineCombinationsBySeasonRequest extends SpeakeasyBase {
    pathParams: LineCombinationsBySeasonPathParams;
}
export declare class LineCombinationsBySeasonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamLines?: any[];
}
