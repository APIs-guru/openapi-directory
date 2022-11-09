import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DepositSwitchCreateRequestOptions } from "./depositswitchcreaterequestoptions";

export enum DepositSwitchCreateRequestCountryCodeEnum {
    Us = "US"
,    Ca = "CA"
}


// DepositSwitchCreateRequest
/** 
 * DepositSwitchCreateRequest defines the request schema for `/deposit_switch/create`
**/
export class DepositSwitchCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=country_code" })
  countryCode?: DepositSwitchCreateRequestCountryCodeEnum;

  @Metadata({ data: "json, name=options" })
  options?: DepositSwitchCreateRequestOptions;

  @Metadata({ data: "json, name=secret" })
  secret?: string;

  @Metadata({ data: "json, name=target_access_token" })
  targetAccessToken: string;

  @Metadata({ data: "json, name=target_account_id" })
  targetAccountId: string;
}
