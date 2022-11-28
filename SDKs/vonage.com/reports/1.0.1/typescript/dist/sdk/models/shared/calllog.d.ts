import { SpeakeasyBase } from "../../../internal/utils";
export declare class CallLog extends SpeakeasyBase {
    charge?: number;
    destinationDeviceName?: string;
    destinationExtension?: number;
    destinationSipId?: string;
    destinationUser?: string;
    destinationUserFullName?: string;
    direction?: string;
    end?: string;
    from?: string;
    id?: string;
    inNetwork?: boolean;
    international?: boolean;
    length?: number;
    rate?: number;
    recorded?: boolean;
    result?: string;
    sourceDeviceName?: string;
    sourceExtension?: number;
    sourceSipId?: string;
    sourceUser?: string;
    sourceUserFullName?: string;
    start?: string;
    to?: string;
}
