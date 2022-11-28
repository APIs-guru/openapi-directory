import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RequestedScopes } from "./requestedscopes";


export enum ConnectedApplicationProductDataTypesEnum {
    AccountBalance = "ACCOUNT_BALANCE",
    AccountUserInfo = "ACCOUNT_USER_INFO",
    AccountTransactions = "ACCOUNT_TRANSACTIONS"
}


// ConnectedApplication
/** 
 * Describes the connected application for a particular end user.
**/
export class ConnectedApplication extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=application_id" })
  applicationId: string;

  @SpeakeasyMetadata({ data: "json, name=application_url" })
  applicationUrl: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: string;

  @SpeakeasyMetadata({ data: "json, name=logo" })
  logo: string;

  @SpeakeasyMetadata({ data: "json, name=logo_url" })
  logoUrl: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=product_data_types" })
  productDataTypes: ConnectedApplicationProductDataTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=reason_for_access" })
  reasonForAccess: string;

  @SpeakeasyMetadata({ data: "json, name=requested_scopes" })
  requestedScopes?: RequestedScopes;

  @SpeakeasyMetadata({ data: "json, name=scopes" })
  scopes?: Map<string, any>;
}
