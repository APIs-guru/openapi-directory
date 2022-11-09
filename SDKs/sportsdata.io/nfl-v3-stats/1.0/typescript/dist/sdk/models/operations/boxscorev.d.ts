import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum BoxScoreVFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class BoxScoreVPathParams extends SpeakeasyBase {
    format: BoxScoreVFormatEnum;
    hometeam: string;
    season: string;
    week: string;
}
export declare class BoxScoreVRequest extends SpeakeasyBase {
    pathParams: BoxScoreVPathParams;
}
export declare class BoxScoreVResponse extends SpeakeasyBase {
    boxScoreV3?: any;
    contentType: string;
    statusCode: number;
}
