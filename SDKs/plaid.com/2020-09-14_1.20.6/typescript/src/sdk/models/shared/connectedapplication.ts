import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RequestedScopes } from "./requestedscopes";

export enum ConnectedApplicationProductDataTypesEnum {
    AccountBalance = "ACCOUNT_BALANCE"
,    AccountUserInfo = "ACCOUNT_USER_INFO"
,    AccountTransactions = "ACCOUNT_TRANSACTIONS"
}


// ConnectedApplication
/** 
 * Describes the connected application for a particular end user.
**/
export class ConnectedApplication extends SpeakeasyBase {
  @Metadata({ data: "json, name=application_id" })
  applicationId: string;

  @Metadata({ data: "json, name=application_url" })
  applicationUrl: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt: string;

  @Metadata({ data: "json, name=logo" })
  logo: string;

  @Metadata({ data: "json, name=logo_url" })
  logoUrl: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=product_data_types" })
  productDataTypes: ConnectedApplicationProductDataTypesEnum[];

  @Metadata({ data: "json, name=reason_for_access" })
  reasonForAccess: string;

  @Metadata({ data: "json, name=requested_scopes" })
  requestedScopes?: RequestedScopes;

  @Metadata({ data: "json, name=scopes" })
  scopes?: Map<string, any>;
}
