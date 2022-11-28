import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FantasyPlayerOwnershipPercentagesSeasonLongFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class FantasyPlayerOwnershipPercentagesSeasonLongPathParams extends SpeakeasyBase {
    format: FantasyPlayerOwnershipPercentagesSeasonLongFormatEnum;
    season: string;
    week: string;
}
export declare class FantasyPlayerOwnershipPercentagesSeasonLongRequest extends SpeakeasyBase {
    pathParams: FantasyPlayerOwnershipPercentagesSeasonLongPathParams;
}
export declare class FantasyPlayerOwnershipPercentagesSeasonLongResponse extends SpeakeasyBase {
    contentType: string;
    playerOwnerships?: any[];
    statusCode: number;
}
