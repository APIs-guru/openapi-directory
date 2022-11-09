import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum CurrentSeasontypeFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class CurrentSeasontypePathParams extends SpeakeasyBase {
    format: CurrentSeasontypeFormatEnum;
}
export declare class CurrentSeasontypeRequest extends SpeakeasyBase {
    pathParams: CurrentSeasontypePathParams;
}
export declare class CurrentSeasontypeResponse extends SpeakeasyBase {
    contentType: string;
    currentSeasontype200ApplicationJsonString?: string;
    statusCode: number;
}
