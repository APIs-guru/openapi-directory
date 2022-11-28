import { SpeakeasyBase } from "../../../internal/utils";
export declare class VerifyV2Service extends SpeakeasyBase {
    accountSid?: string;
    codeLength?: number;
    customCodeEnabled?: boolean;
    dateCreated?: Date;
    dateUpdated?: Date;
    defaultTemplateSid?: string;
    doNotShareWarningEnabled?: boolean;
    dtmfInputRequired?: boolean;
    friendlyName?: string;
    links?: Map<string, any>;
    lookupEnabled?: boolean;
    psd2Enabled?: boolean;
    push?: any;
    sid?: string;
    skipSmsToLandlines?: boolean;
    totp?: any;
    ttsName?: string;
    url?: string;
}
