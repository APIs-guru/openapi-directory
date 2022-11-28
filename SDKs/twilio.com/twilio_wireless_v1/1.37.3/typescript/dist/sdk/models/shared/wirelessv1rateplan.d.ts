import { SpeakeasyBase } from "../../../internal/utils";
export declare class WirelessV1RatePlan extends SpeakeasyBase {
    accountSid?: string;
    dataEnabled?: boolean;
    dataLimit?: number;
    dataMetering?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    friendlyName?: string;
    internationalRoaming?: string[];
    internationalRoamingDataLimit?: number;
    messagingEnabled?: boolean;
    nationalRoamingDataLimit?: number;
    nationalRoamingEnabled?: boolean;
    sid?: string;
    uniqueName?: string;
    url?: string;
    voiceEnabled?: boolean;
}
