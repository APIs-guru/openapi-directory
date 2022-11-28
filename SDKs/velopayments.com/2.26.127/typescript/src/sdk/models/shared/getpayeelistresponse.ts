import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GetPayeeListResponseCompany } from "./getpayeelistresponsecompany";
import { GetPayeeListResponseIndividual } from "./getpayeelistresponseindividual";
import { OnboardedStatus2Enum } from "./onboardedstatus2enum";
import { PayeeTypeEnum } from "./payeetypeenum";
import { PayeePayorRefV3 } from "./payeepayorrefv3";
import { WatchlistStatusEnum } from "./watchliststatusenum";



export class GetPayeeListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=company" })
  company?: GetPayeeListResponseCompany;

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
  individual?: GetPayeeListResponseIndividual;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=onboardedStatus" })
  onboardedStatus?: OnboardedStatus2Enum;

  @SpeakeasyMetadata({ data: "json, name=payeeId" })
  payeeId?: string;

  @SpeakeasyMetadata({ data: "json, name=payeeType" })
  payeeType?: PayeeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=payorRefs", elemType: PayeePayorRefV3 })
  payorRefs?: PayeePayorRefV3[];

  @SpeakeasyMetadata({ data: "json, name=watchlistOverrideComment" })
  watchlistOverrideComment?: string;

  @SpeakeasyMetadata({ data: "json, name=watchlistStatus" })
  watchlistStatus?: WatchlistStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=watchlistStatusUpdatedTimestamp" })
  watchlistStatusUpdatedTimestamp?: string;
}
