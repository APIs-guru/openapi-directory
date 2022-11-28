import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PayeeAddress } from "./payeeaddress";
import { Challenge } from "./challenge";
import { Company } from "./company";
import { Individual } from "./individual";
import { OnboardedStatus2Enum } from "./onboardedstatus2enum";
import { PayeeTypeEnum } from "./payeetypeenum";
import { PayeePayorRefV3 } from "./payeepayorrefv3";
import { WatchlistStatusEnum } from "./watchliststatusenum";



export class PayeeDetailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acceptTermsAndConditionsTimestamp" })
  acceptTermsAndConditionsTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: PayeeAddress;

  @SpeakeasyMetadata({ data: "json, name=cellphoneNumber" })
  cellphoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=challenge" })
  challenge?: Challenge;

  @SpeakeasyMetadata({ data: "json, name=company" })
  company?: Company;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=disabledComment" })
  disabledComment?: string;

  @SpeakeasyMetadata({ data: "json, name=disabledUpdatedTimestamp" })
  disabledUpdatedTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=enhancedKycCompleted" })
  enhancedKycCompleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=gracePeriodEndDate" })
  gracePeriodEndDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=individual" })
  individual?: Individual;

  @SpeakeasyMetadata({ data: "json, name=kycCompletedTimestamp" })
  kycCompletedTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=marketingOptInDecision" })
  marketingOptInDecision?: boolean;

  @SpeakeasyMetadata({ data: "json, name=marketingOptInTimestamp" })
  marketingOptInTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=onboardedStatus" })
  onboardedStatus?: OnboardedStatus2Enum;

  @SpeakeasyMetadata({ data: "json, name=pausePayment" })
  pausePayment?: boolean;

  @SpeakeasyMetadata({ data: "json, name=pausePaymentTimestamp" })
  pausePaymentTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=payeeId" })
  payeeId?: string;

  @SpeakeasyMetadata({ data: "json, name=payeeType" })
  payeeType?: PayeeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=payorRefs", elemType: PayeePayorRefV3 })
  payorRefs?: PayeePayorRefV3[];

  @SpeakeasyMetadata({ data: "json, name=watchlistOverrideComment" })
  watchlistOverrideComment?: string;

  @SpeakeasyMetadata({ data: "json, name=watchlistOverrideExpiresAtTimestamp" })
  watchlistOverrideExpiresAtTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=watchlistStatus" })
  watchlistStatus?: WatchlistStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=watchlistStatusUpdatedTimestamp" })
  watchlistStatusUpdatedTimestamp?: string;
}
