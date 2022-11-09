import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteInstallationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class DeleteInstallationRequest extends SpeakeasyBase {
  @Metadata()
  security: DeleteInstallationSecurity;
}


// DeleteInstallation200ApplicationJsonUsageCharge
/** 
 * （従量課金の場合）従量課金アンインストール情報
**/
export class DeleteInstallation200ApplicationJsonUsageCharge extends SpeakeasyBase {
  @Metadata({ data: "json, name=api_token" })
  apiToken?: string;

  @Metadata({ data: "json, name=closing_on" })
  closingOn?: number;
}


export class DeleteInstallation200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_id" })
  accountId?: string;

  @Metadata({ data: "json, name=application_charge_source_id" })
  applicationChargeSourceId?: string;

  @Metadata({ data: "json, name=recurring_application_charge_id" })
  recurringApplicationChargeId?: string;

  @Metadata({ data: "json, name=uninstalled_at" })
  uninstalledAt?: number;

  @Metadata({ data: "json, name=usage_charge" })
  usageCharge?: DeleteInstallation200ApplicationJsonUsageCharge;
}


export class DeleteInstallationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteInstallation200ApplicationJsonObject?: DeleteInstallation200ApplicationJson;
}
