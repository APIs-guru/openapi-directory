import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DepositSwitchCreateRequestOptions } from "./depositswitchcreaterequestoptions";

export enum DepositSwitchAltCreateRequestCountryCodeEnum {
    Us = "US"
,    Ca = "CA"
}


// DepositSwitchAltCreateRequest
/** 
 * DepositSwitchAltCreateRequest defines the request schema for `/deposit_switch/alt/create`
**/
export class DepositSwitchAltCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=country_code" })
  countryCode?: DepositSwitchAltCreateRequestCountryCodeEnum;

  @Metadata({ data: "json, name=options" })
  options?: DepositSwitchCreateRequestOptions;

  @Metadata({ data: "json, name=secret" })
  secret?: string;

  @Metadata({ data: "json, name=target_account" })
  targetAccount: Map<string, any>;

  @Metadata({ data: "json, name=target_user" })
  targetUser: Map<string, any>;
}
