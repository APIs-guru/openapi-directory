import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum DfsSlatesByWeekFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class DfsSlatesByWeekPathParams extends SpeakeasyBase {
    format: DfsSlatesByWeekFormatEnum;
    season: string;
    week: string;
}
export declare class DfsSlatesByWeekRequest extends SpeakeasyBase {
    pathParams: DfsSlatesByWeekPathParams;
}
export declare class DfsSlatesByWeekResponse extends SpeakeasyBase {
    contentType: string;
    dfsSlates?: any[];
    statusCode: number;
}
