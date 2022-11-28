import { SpeakeasyBase } from "../../../internal/utils";
export declare class WirelessV1SimDataSession extends SpeakeasyBase {
    accountSid?: string;
    cellId?: string;
    cellLocationEstimate?: any;
    end?: Date;
    imei?: string;
    lastUpdated?: Date;
    operatorCountry?: string;
    operatorMcc?: string;
    operatorMnc?: string;
    operatorName?: string;
    packetsDownloaded?: number;
    packetsUploaded?: number;
    radioLink?: string;
    sid?: string;
    simSid?: string;
    start?: Date;
}
