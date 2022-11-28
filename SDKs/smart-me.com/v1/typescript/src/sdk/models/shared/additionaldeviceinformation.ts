import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AdditionalDeviceInformation
/** 
 * Additional Information For a device
**/
export class AdditionalDeviceInformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AdditionalMeterSerialNumber" })
  additionalMeterSerialNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=FirmwareVersion" })
  firmwareVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=HardwareVersion" })
  hardwareVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=ID" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=NetworkConnection" })
  networkConnection?: string;

  @SpeakeasyMetadata({ data: "json, name=NetworkConnectionRSSI" })
  networkConnectionRssi?: number;
}
