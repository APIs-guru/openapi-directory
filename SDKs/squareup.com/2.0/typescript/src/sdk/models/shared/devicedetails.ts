import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeviceDetails
/** 
 * Details about the device that took the payment.
**/
export class DeviceDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=device_id" })
  deviceId?: string;

  @Metadata({ data: "json, name=device_installation_id" })
  deviceInstallationId?: string;

  @Metadata({ data: "json, name=device_name" })
  deviceName?: string;
}
