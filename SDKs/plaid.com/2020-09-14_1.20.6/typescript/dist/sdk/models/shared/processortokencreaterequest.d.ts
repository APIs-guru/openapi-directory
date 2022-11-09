import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ProcessorTokenCreateRequestProcessorEnum {
    Achq = "achq",
    Alpaca = "alpaca",
    Astra = "astra",
    Check = "check",
    Checkbook = "checkbook",
    Circle = "circle",
    Drivewealth = "drivewealth",
    Dwolla = "dwolla",
    Galileo = "galileo",
    Lithic = "lithic",
    ModernTreasury = "modern_treasury",
    Moov = "moov",
    Ocrolus = "ocrolus",
    PrimeTrust = "prime_trust",
    Rize = "rize",
    SilaMoney = "sila_money",
    SbvApi = "sbv_api",
    Unit = "unit",
    Vesta = "vesta",
    Vopay = "vopay",
    Wyre = "wyre"
}
/**
 * ProcessorTokenCreateRequest defines the request schema for `/processor/token/create`
**/
export declare class ProcessorTokenCreateRequest extends SpeakeasyBase {
    accessToken: string;
    accountId: string;
    clientId?: string;
    processor: ProcessorTokenCreateRequestProcessorEnum;
    secret?: string;
}
