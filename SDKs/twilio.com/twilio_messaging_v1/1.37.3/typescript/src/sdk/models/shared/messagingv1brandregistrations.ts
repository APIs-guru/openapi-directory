import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BrandRegistrationsEnumBrandFeedbackEnum } from "./brandregistrationsenumbrandfeedbackenum";
import { BrandRegistrationsEnumIdentityStatusEnum } from "./brandregistrationsenumidentitystatusenum";
import { BrandRegistrationsEnumStatusEnum } from "./brandregistrationsenumstatusenum";



export class MessagingV1BrandRegistrations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=a2p_profile_bundle_sid" })
  a2pProfileBundleSid?: string;

  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=brand_feedback" })
  brandFeedback?: BrandRegistrationsEnumBrandFeedbackEnum[];

  @SpeakeasyMetadata({ data: "json, name=brand_score" })
  brandScore?: number;

  @SpeakeasyMetadata({ data: "json, name=brand_type" })
  brandType?: string;

  @SpeakeasyMetadata({ data: "json, name=customer_profile_bundle_sid" })
  customerProfileBundleSid?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=failure_reason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=government_entity" })
  governmentEntity?: boolean;

  @SpeakeasyMetadata({ data: "json, name=identity_status" })
  identityStatus?: BrandRegistrationsEnumIdentityStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=mock" })
  mock?: boolean;

  @SpeakeasyMetadata({ data: "json, name=russell_3000" })
  russell3000?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=skip_automatic_sec_vet" })
  skipAutomaticSecVet?: boolean;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: BrandRegistrationsEnumStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tax_exempt_status" })
  taxExemptStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=tcr_id" })
  tcrId?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
