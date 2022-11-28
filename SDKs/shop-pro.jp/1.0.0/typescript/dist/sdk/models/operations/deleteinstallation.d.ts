import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteInstallationSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
/**
 * （従量課金の場合）従量課金アンインストール情報
**/
export declare class DeleteInstallation200ApplicationJsonUsageCharge extends SpeakeasyBase {
    apiToken?: string;
    closingOn?: number;
}
export declare class DeleteInstallation200ApplicationJson extends SpeakeasyBase {
    accountId?: string;
    applicationChargeSourceId?: string;
    recurringApplicationChargeId?: string;
    uninstalledAt?: number;
    usageCharge?: DeleteInstallation200ApplicationJsonUsageCharge;
}
export declare class DeleteInstallationRequest extends SpeakeasyBase {
    security: DeleteInstallationSecurity;
}
export declare class DeleteInstallationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteInstallation200ApplicationJsonObject?: DeleteInstallation200ApplicationJson;
}
