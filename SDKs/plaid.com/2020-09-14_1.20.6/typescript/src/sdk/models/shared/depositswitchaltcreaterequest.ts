import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DepositSwitchCreateRequestOptions } from "./depositswitchcreaterequestoptions";


export enum DepositSwitchAltCreateRequestCountryCodeEnum {
    Us = "US",
    Ca = "CA"
}


// DepositSwitchAltCreateRequest
/** 
 * DepositSwitchAltCreateRequest defines the request schema for `/deposit_switch/alt/create`
**/
export class DepositSwitchAltCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=country_code" })
  countryCode?: DepositSwitchAltCreateRequestCountryCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: DepositSwitchCreateRequestOptions;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;

  @SpeakeasyMetadata({ data: "json, name=target_account" })
  targetAccount: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=target_user" })
  targetUser: Map<string, any>;
}
