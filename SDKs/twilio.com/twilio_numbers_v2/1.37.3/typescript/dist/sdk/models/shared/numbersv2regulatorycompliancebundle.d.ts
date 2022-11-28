import { SpeakeasyBase } from "../../../internal/utils";
import { BundleEnumStatusEnum } from "./bundleenumstatusenum";
export declare class NumbersV2RegulatoryComplianceBundle extends SpeakeasyBase {
    accountSid?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    email?: string;
    friendlyName?: string;
    links?: Map<string, any>;
    regulationSid?: string;
    sid?: string;
    status?: BundleEnumStatusEnum;
    statusCallback?: string;
    url?: string;
    validUntil?: Date;
}
