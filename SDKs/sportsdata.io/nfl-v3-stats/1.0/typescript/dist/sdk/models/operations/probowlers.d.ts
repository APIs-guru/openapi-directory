import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ProBowlersFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class ProBowlersPathParams extends SpeakeasyBase {
    format: ProBowlersFormatEnum;
    season: string;
}
export declare class ProBowlersRequest extends SpeakeasyBase {
    pathParams: ProBowlersPathParams;
}
export declare class ProBowlersResponse extends SpeakeasyBase {
    contentType: string;
    playerInfos?: any[];
    statusCode: number;
}
