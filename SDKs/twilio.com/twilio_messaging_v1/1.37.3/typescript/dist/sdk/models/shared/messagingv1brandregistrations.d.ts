import { SpeakeasyBase } from "../../../internal/utils";
import { BrandRegistrationsEnumBrandFeedbackEnum } from "./brandregistrationsenumbrandfeedbackenum";
import { BrandRegistrationsEnumIdentityStatusEnum } from "./brandregistrationsenumidentitystatusenum";
import { BrandRegistrationsEnumStatusEnum } from "./brandregistrationsenumstatusenum";
export declare class MessagingV1BrandRegistrations extends SpeakeasyBase {
    a2pProfileBundleSid?: string;
    accountSid?: string;
    brandFeedback?: BrandRegistrationsEnumBrandFeedbackEnum[];
    brandScore?: number;
    brandType?: string;
    customerProfileBundleSid?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    failureReason?: string;
    governmentEntity?: boolean;
    identityStatus?: BrandRegistrationsEnumIdentityStatusEnum;
    links?: Map<string, any>;
    mock?: boolean;
    russell3000?: boolean;
    sid?: string;
    skipAutomaticSecVet?: boolean;
    status?: BrandRegistrationsEnumStatusEnum;
    taxExemptStatus?: string;
    tcrId?: string;
    url?: string;
}
