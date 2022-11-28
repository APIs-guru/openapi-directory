import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PayeeAddress2 } from "./payeeaddress2";
import { Challenge2 } from "./challenge2";
import { Company2 } from "./company2";
import { Individual2 } from "./individual2";
import { OnboardedStatusEnum } from "./onboardedstatusenum";
import { PayeeTypeEnum } from "./payeetypeenum";
import { PayeePayorRef } from "./payeepayorref";
import { WatchlistStatus2Enum } from "./watchliststatus2enum";



export class PayeeDetailResponse2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acceptTermsAndConditionsTimestamp" })
  acceptTermsAndConditionsTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: PayeeAddress2;

  @SpeakeasyMetadata({ data: "json, name=cellphoneNumber" })
  cellphoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=challenge" })
  challenge?: Challenge2;

  @SpeakeasyMetadata({ data: "json, name=company" })
  company?: Company2;

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
  individual?: Individual2;

  @SpeakeasyMetadata({ data: "json, name=kycCompletedTimestamp" })
  kycCompletedTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=marketingOptInDecision" })
  marketingOptInDecision?: boolean;

  @SpeakeasyMetadata({ data: "json, name=marketingOptInTimestamp" })
  marketingOptInTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=onboardedStatus" })
  onboardedStatus?: OnboardedStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=pausePayment" })
  pausePayment?: boolean;

  @SpeakeasyMetadata({ data: "json, name=pausePaymentTimestamp" })
  pausePaymentTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=payeeId" })
  payeeId?: string;

  @SpeakeasyMetadata({ data: "json, name=payeeType" })
  payeeType?: PayeeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=payorRefs", elemType: PayeePayorRef })
  payorRefs?: PayeePayorRef[];

  @SpeakeasyMetadata({ data: "json, name=watchlistOverrideComment" })
  watchlistOverrideComment?: string;

  @SpeakeasyMetadata({ data: "json, name=watchlistOverrideExpiresAtTimestamp" })
  watchlistOverrideExpiresAtTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=watchlistStatus" })
  watchlistStatus?: WatchlistStatus2Enum;

  @SpeakeasyMetadata({ data: "json, name=watchlistStatusUpdatedTimestamp" })
  watchlistStatusUpdatedTimestamp?: string;
}
