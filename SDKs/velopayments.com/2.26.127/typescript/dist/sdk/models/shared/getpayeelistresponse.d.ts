import { SpeakeasyBase } from "../../../internal/utils";
import { GetPayeeListResponseCompany } from "./getpayeelistresponsecompany";
import { GetPayeeListResponseIndividual } from "./getpayeelistresponseindividual";
import { OnboardedStatus2Enum } from "./onboardedstatus2enum";
import { PayeeTypeEnum } from "./payeetypeenum";
import { PayeePayorRefV3 } from "./payeepayorrefv3";
import { WatchlistStatusEnum } from "./watchliststatusenum";
export declare class GetPayeeListResponse extends SpeakeasyBase {
    company?: GetPayeeListResponseCompany;
    country?: string;
    created?: Date;
    disabled?: boolean;
    disabledComment?: string;
    disabledUpdatedTimestamp?: Date;
    displayName?: string;
    email?: string;
    individual?: GetPayeeListResponseIndividual;
    language?: string;
    onboardedStatus?: OnboardedStatus2Enum;
    payeeId?: string;
    payeeType?: PayeeTypeEnum;
    payorRefs?: PayeePayorRefV3[];
    watchlistOverrideComment?: string;
    watchlistStatus?: WatchlistStatusEnum;
    watchlistStatusUpdatedTimestamp?: string;
}
