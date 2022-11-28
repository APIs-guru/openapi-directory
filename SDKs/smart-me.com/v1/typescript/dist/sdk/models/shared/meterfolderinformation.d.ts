import { SpeakeasyBase } from "../../../internal/utils";
import { InputInformation } from "./inputinformation";
import { OutputInformation } from "./outputinformation";
/**
 * Container Class for the Web API
**/
export declare class MeterFolderInformation extends SpeakeasyBase {
    communicationModuleFirmwareVersion?: number;
    communicationModuleHardwareVersion?: number;
    firmwareVersion?: number;
    hardwareVersion?: number;
    inputInformations?: InputInformation[];
    isFolder?: boolean;
    name?: string;
    outputInformations?: OutputInformation[];
}
