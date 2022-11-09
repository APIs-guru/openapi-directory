import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum BoxScoresDeltaVFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare enum BoxScoresDeltaVPlayerstoincludeEnum {
    All = "all",
    Fantasy = "fantasy",
    Idp = "idp"
}
export declare class BoxScoresDeltaVPathParams extends SpeakeasyBase {
    format: BoxScoresDeltaVFormatEnum;
    minutes: string;
    playerstoinclude: BoxScoresDeltaVPlayerstoincludeEnum;
    season: string;
    week: string;
}
export declare class BoxScoresDeltaVRequest extends SpeakeasyBase {
    pathParams: BoxScoresDeltaVPathParams;
}
export declare class BoxScoresDeltaVResponse extends SpeakeasyBase {
    boxScoreV3s?: any[];
    contentType: string;
    statusCode: number;
}
