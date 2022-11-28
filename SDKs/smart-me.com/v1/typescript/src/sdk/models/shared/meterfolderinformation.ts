import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InputInformation } from "./inputinformation";
import { OutputInformation } from "./outputinformation";



// MeterFolderInformation
/** 
 * Container Class for the Web API
**/
export class MeterFolderInformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CommunicationModuleFirmwareVersion" })
  communicationModuleFirmwareVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=CommunicationModuleHardwareVersion" })
  communicationModuleHardwareVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=FirmwareVersion" })
  firmwareVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=HardwareVersion" })
  hardwareVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=InputInformations", elemType: InputInformation })
  inputInformations?: InputInformation[];

  @SpeakeasyMetadata({ data: "json, name=IsFolder" })
  isFolder?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=OutputInformations", elemType: OutputInformation })
  outputInformations?: OutputInformation[];
}
