import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BrandRegistrationsEnumBrandFeedbackEnum } from "./brandregistrationsenumbrandfeedbackenum";
import { BrandRegistrationsEnumIdentityStatusEnum } from "./brandregistrationsenumidentitystatusenum";
import { BrandRegistrationsEnumStatusEnum } from "./brandregistrationsenumstatusenum";


export class MessagingV1BrandRegistrations extends SpeakeasyBase {
  @Metadata({ data: "json, name=a2p_profile_bundle_sid" })
  a2pProfileBundleSid?: string;

  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=brand_feedback" })
  brandFeedback?: BrandRegistrationsEnumBrandFeedbackEnum[];

  @Metadata({ data: "json, name=brand_score" })
  brandScore?: number;

  @Metadata({ data: "json, name=brand_type" })
  brandType?: string;

  @Metadata({ data: "json, name=customer_profile_bundle_sid" })
  customerProfileBundleSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=failure_reason" })
  failureReason?: string;

  @Metadata({ data: "json, name=government_entity" })
  governmentEntity?: boolean;

  @Metadata({ data: "json, name=identity_status" })
  identityStatus?: BrandRegistrationsEnumIdentityStatusEnum;

  @Metadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=mock" })
  mock?: boolean;

  @Metadata({ data: "json, name=russell_3000" })
  russell3000?: boolean;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=skip_automatic_sec_vet" })
  skipAutomaticSecVet?: boolean;

  @Metadata({ data: "json, name=status" })
  status?: BrandRegistrationsEnumStatusEnum;

  @Metadata({ data: "json, name=tax_exempt_status" })
  taxExemptStatus?: string;

  @Metadata({ data: "json, name=tcr_id" })
  tcrId?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
