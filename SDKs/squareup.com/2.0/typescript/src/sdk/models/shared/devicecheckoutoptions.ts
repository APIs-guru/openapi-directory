import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TipSettings } from "./tipsettings";


export class DeviceCheckoutOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=device_id" })
  deviceId: string;

  @Metadata({ data: "json, name=skip_receipt_screen" })
  skipReceiptScreen?: boolean;

  @Metadata({ data: "json, name=tip_settings" })
  tipSettings?: TipSettings;
}
