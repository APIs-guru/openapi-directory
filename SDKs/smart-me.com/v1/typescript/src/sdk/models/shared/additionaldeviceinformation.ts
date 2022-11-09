import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AdditionalDeviceInformation
/** 
 * Additional Information For a device
**/
export class AdditionalDeviceInformation extends SpeakeasyBase {
  @Metadata({ data: "json, name=AdditionalMeterSerialNumber" })
  additionalMeterSerialNumber?: string;

  @Metadata({ data: "json, name=FirmwareVersion" })
  firmwareVersion?: number;

  @Metadata({ data: "json, name=HardwareVersion" })
  hardwareVersion?: number;

  @Metadata({ data: "json, name=ID" })
  id?: string;

  @Metadata({ data: "json, name=NetworkConnection" })
  networkConnection?: string;

  @Metadata({ data: "json, name=NetworkConnectionRSSI" })
  networkConnectionRssi?: number;
}
