import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PlayerDetailsByActiveFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayerDetailsByActivePathParams extends SpeakeasyBase {
    format: PlayerDetailsByActiveFormatEnum;
}
export declare class PlayerDetailsByActiveRequest extends SpeakeasyBase {
    pathParams: PlayerDetailsByActivePathParams;
}
export declare class PlayerDetailsByActiveResponse extends SpeakeasyBase {
    contentType: string;
    players?: any[];
    statusCode: number;
}
