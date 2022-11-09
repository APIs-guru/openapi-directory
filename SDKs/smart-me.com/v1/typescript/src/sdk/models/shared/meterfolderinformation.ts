import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InputInformation } from "./inputinformation";
import { OutputInformation } from "./outputinformation";


// MeterFolderInformation
/** 
 * Container Class for the Web API
**/
export class MeterFolderInformation extends SpeakeasyBase {
  @Metadata({ data: "json, name=CommunicationModuleFirmwareVersion" })
  communicationModuleFirmwareVersion?: number;

  @Metadata({ data: "json, name=CommunicationModuleHardwareVersion" })
  communicationModuleHardwareVersion?: number;

  @Metadata({ data: "json, name=FirmwareVersion" })
  firmwareVersion?: number;

  @Metadata({ data: "json, name=HardwareVersion" })
  hardwareVersion?: number;

  @Metadata({ data: "json, name=InputInformations", elemType: shared.InputInformation })
  inputInformations?: InputInformation[];

  @Metadata({ data: "json, name=IsFolder" })
  isFolder?: boolean;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=OutputInformations", elemType: shared.OutputInformation })
  outputInformations?: OutputInformation[];
}
