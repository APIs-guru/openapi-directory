import { SpeakeasyBase } from "../../../internal/utils";
import { Device } from "./device";
export declare class ContactAddressInfo extends SpeakeasyBase {
    address?: string;
    channel?: number;
    created?: Date;
    device?: Device;
    id?: string;
    lastUpdated?: Date;
    options?: number;
    userId?: string;
}
