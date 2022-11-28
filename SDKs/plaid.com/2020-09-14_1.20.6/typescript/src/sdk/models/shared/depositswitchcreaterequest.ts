import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DepositSwitchCreateRequestOptions } from "./depositswitchcreaterequestoptions";


export enum DepositSwitchCreateRequestCountryCodeEnum {
    Us = "US",
    Ca = "CA"
}


// DepositSwitchCreateRequest
/** 
 * DepositSwitchCreateRequest defines the request schema for `/deposit_switch/create`
**/
export class DepositSwitchCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=country_code" })
  countryCode?: DepositSwitchCreateRequestCountryCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: DepositSwitchCreateRequestOptions;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;

  @SpeakeasyMetadata({ data: "json, name=target_access_token" })
  targetAccessToken: string;

  @SpeakeasyMetadata({ data: "json, name=target_account_id" })
  targetAccountId: string;
}
