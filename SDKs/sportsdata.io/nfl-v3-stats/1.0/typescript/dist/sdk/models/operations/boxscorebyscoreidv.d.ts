import { SpeakeasyBase } from "../../../internal/utils";
export declare enum BoxScoreByScoreidVFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class BoxScoreByScoreidVPathParams extends SpeakeasyBase {
    format: BoxScoreByScoreidVFormatEnum;
    scoreid: string;
}
export declare class BoxScoreByScoreidVRequest extends SpeakeasyBase {
    pathParams: BoxScoreByScoreidVPathParams;
}
export declare class BoxScoreByScoreidVResponse extends SpeakeasyBase {
    boxScoreV3?: any;
    contentType: string;
    statusCode: number;
}
