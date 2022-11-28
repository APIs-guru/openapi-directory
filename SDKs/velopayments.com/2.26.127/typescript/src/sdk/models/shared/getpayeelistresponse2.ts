import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GetPayeeListResponseCompany2 } from "./getpayeelistresponsecompany2";
import { GetPayeeListResponseIndividual2 } from "./getpayeelistresponseindividual2";
import { OnboardedStatusEnum } from "./onboardedstatusenum";
import { PayeeTypeEnum } from "./payeetypeenum";
import { PayeePayorRef } from "./payeepayorref";
import { WatchlistStatus2Enum } from "./watchliststatus2enum";



export class GetPayeeListResponse2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=company" })
  company?: GetPayeeListResponseCompany2;

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

  @SpeakeasyMetadata({ data: "json, name=individual" })
  individual?: GetPayeeListResponseIndividual2;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=onboardedStatus" })
  onboardedStatus?: OnboardedStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=payeeId" })
  payeeId?: string;

  @SpeakeasyMetadata({ data: "json, name=payeeType" })
  payeeType?: PayeeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=payorRefs", elemType: PayeePayorRef })
  payorRefs?: PayeePayorRef[];

  @SpeakeasyMetadata({ data: "json, name=watchlistOverrideComment" })
  watchlistOverrideComment?: string;

  @SpeakeasyMetadata({ data: "json, name=watchlistStatus" })
  watchlistStatus?: WatchlistStatus2Enum;

  @SpeakeasyMetadata({ data: "json, name=watchlistStatusUpdatedTimestamp" })
  watchlistStatusUpdatedTimestamp?: string;
}
