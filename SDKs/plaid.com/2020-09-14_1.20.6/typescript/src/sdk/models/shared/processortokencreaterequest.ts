import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ProcessorTokenCreateRequestProcessorEnum {
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


// ProcessorTokenCreateRequest
/** 
 * ProcessorTokenCreateRequest defines the request schema for `/processor/token/create`
**/
export class ProcessorTokenCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_token" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=processor" })
  processor: ProcessorTokenCreateRequestProcessorEnum;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
