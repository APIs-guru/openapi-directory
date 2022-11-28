import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PlayerDetailsByFreeAgentsFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayerDetailsByFreeAgentsPathParams extends SpeakeasyBase {
    format: PlayerDetailsByFreeAgentsFormatEnum;
}
export declare class PlayerDetailsByFreeAgentsRequest extends SpeakeasyBase {
    pathParams: PlayerDetailsByFreeAgentsPathParams;
}
export declare class PlayerDetailsByFreeAgentsResponse extends SpeakeasyBase {
    contentType: string;
    players?: any[];
    statusCode: number;
}
