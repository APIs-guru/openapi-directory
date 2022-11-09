import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ChampionsFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class ChampionsPathParams extends SpeakeasyBase {
    format: ChampionsFormatEnum;
}
export declare class ChampionsRequest extends SpeakeasyBase {
    pathParams: ChampionsPathParams;
}
export declare class ChampionsResponse extends SpeakeasyBase {
    champions?: any[];
    contentType: string;
    statusCode: number;
}
