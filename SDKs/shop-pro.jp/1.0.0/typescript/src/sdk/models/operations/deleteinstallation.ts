import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteInstallationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


// DeleteInstallation200ApplicationJsonUsageCharge
/** 
 * （従量課金の場合）従量課金アンインストール情報
**/
export class DeleteInstallation200ApplicationJsonUsageCharge extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=api_token" })
  apiToken?: string;

  @SpeakeasyMetadata({ data: "json, name=closing_on" })
  closingOn?: number;
}


export class DeleteInstallation200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=application_charge_source_id" })
  applicationChargeSourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=recurring_application_charge_id" })
  recurringApplicationChargeId?: string;

  @SpeakeasyMetadata({ data: "json, name=uninstalled_at" })
  uninstalledAt?: number;

  @SpeakeasyMetadata({ data: "json, name=usage_charge" })
  usageCharge?: DeleteInstallation200ApplicationJsonUsageCharge;
}


export class DeleteInstallationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: DeleteInstallationSecurity;
}


export class DeleteInstallationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteInstallation200ApplicationJsonObject?: DeleteInstallation200ApplicationJson;
}
