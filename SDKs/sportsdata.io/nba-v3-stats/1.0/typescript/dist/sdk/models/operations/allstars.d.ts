import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AllStarsFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class AllStarsPathParams extends SpeakeasyBase {
    format: AllStarsFormatEnum;
    season: string;
}
export declare class AllStarsRequest extends SpeakeasyBase {
    pathParams: AllStarsPathParams;
}
export declare class AllStarsResponse extends SpeakeasyBase {
    contentType: string;
    playerInfos?: any[];
    statusCode: number;
}
