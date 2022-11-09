import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PlayerDetailsByAvailableFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayerDetailsByAvailablePathParams extends SpeakeasyBase {
    format: PlayerDetailsByAvailableFormatEnum;
}
export declare class PlayerDetailsByAvailableRequest extends SpeakeasyBase {
    pathParams: PlayerDetailsByAvailablePathParams;
}
export declare class PlayerDetailsByAvailableResponse extends SpeakeasyBase {
    contentType: string;
    players?: any[];
    statusCode: number;
}
