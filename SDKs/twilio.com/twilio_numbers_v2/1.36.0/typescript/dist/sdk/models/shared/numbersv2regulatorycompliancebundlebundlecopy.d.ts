import { SpeakeasyBase } from "../../../internal/utils/utils";
import { BundleCopyEnumStatusEnum } from "./bundlecopyenumstatusenum";
export declare class NumbersV2RegulatoryComplianceBundleBundleCopy extends SpeakeasyBase {
    accountSid?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    email?: string;
    friendlyName?: string;
    regulationSid?: string;
    sid?: string;
    status?: BundleCopyEnumStatusEnum;
    statusCallback?: string;
    validUntil?: Date;
}
