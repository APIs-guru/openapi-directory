import { SpeakeasyBase } from "../../../internal/utils";
import { PayorAddressV2 } from "./payoraddressv2";
import { KycStateEnum } from "./kycstateenum";
import { PaymentRailsEnum } from "./paymentrailsenum";
import { TransmissionTypes2 } from "./transmissiontypes2";
export declare enum PayorV2LanguageEnum {
    En = "EN",
    Fr = "FR"
}
export declare class PayorV2 extends SpeakeasyBase {
    address?: PayorAddressV2;
    allowsLanguageChoice?: boolean;
    collectiveAlias?: string;
    dbaName?: string;
    includesReports?: boolean;
    kycState?: KycStateEnum;
    language?: PayorV2LanguageEnum;
    manualLockout?: boolean;
    maxMasterPayorAdmins?: number;
    payeeGracePeriodDays?: number;
    payeeGracePeriodProcessingEnabled?: boolean;
    paymentRails?: PaymentRailsEnum;
    payorId: string;
    payorName: string;
    payorXid?: string;
    primaryContactEmail?: string;
    primaryContactName?: string;
    primaryContactPhone?: string;
    reminderEmailsOptOut?: boolean;
    remoteSystemIds?: string[];
    supportContact?: string;
    transmissionTypes?: TransmissionTypes2;
    wuCustomerId?: string;
}
