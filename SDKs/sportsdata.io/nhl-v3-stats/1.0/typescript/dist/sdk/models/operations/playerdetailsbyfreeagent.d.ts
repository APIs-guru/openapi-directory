import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PlayerDetailsByFreeAgentFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayerDetailsByFreeAgentPathParams extends SpeakeasyBase {
    format: PlayerDetailsByFreeAgentFormatEnum;
}
export declare class PlayerDetailsByFreeAgentRequest extends SpeakeasyBase {
    pathParams: PlayerDetailsByFreeAgentPathParams;
}
export declare class PlayerDetailsByFreeAgentResponse extends SpeakeasyBase {
    contentType: string;
    players?: any[];
    statusCode: number;
}
