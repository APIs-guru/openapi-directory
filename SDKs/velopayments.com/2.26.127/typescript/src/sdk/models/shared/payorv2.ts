import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PayorAddressV2 } from "./payoraddressv2";
import { KycStateEnum } from "./kycstateenum";
import { PaymentRailsEnum } from "./paymentrailsenum";
import { TransmissionTypes2 } from "./transmissiontypes2";


export enum PayorV2LanguageEnum {
    En = "EN",
    Fr = "FR"
}


export class PayorV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: PayorAddressV2;

  @SpeakeasyMetadata({ data: "json, name=allowsLanguageChoice" })
  allowsLanguageChoice?: boolean;

  @SpeakeasyMetadata({ data: "json, name=collectiveAlias" })
  collectiveAlias?: string;

  @SpeakeasyMetadata({ data: "json, name=dbaName" })
  dbaName?: string;

  @SpeakeasyMetadata({ data: "json, name=includesReports" })
  includesReports?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kycState" })
  kycState?: KycStateEnum;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: PayorV2LanguageEnum;

  @SpeakeasyMetadata({ data: "json, name=manualLockout" })
  manualLockout?: boolean;

  @SpeakeasyMetadata({ data: "json, name=maxMasterPayorAdmins" })
  maxMasterPayorAdmins?: number;

  @SpeakeasyMetadata({ data: "json, name=payeeGracePeriodDays" })
  payeeGracePeriodDays?: number;

  @SpeakeasyMetadata({ data: "json, name=payeeGracePeriodProcessingEnabled" })
  payeeGracePeriodProcessingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=paymentRails" })
  paymentRails?: PaymentRailsEnum;

  @SpeakeasyMetadata({ data: "json, name=payorId" })
  payorId: string;

  @SpeakeasyMetadata({ data: "json, name=payorName" })
  payorName: string;

  @SpeakeasyMetadata({ data: "json, name=payorXid" })
  payorXid?: string;

  @SpeakeasyMetadata({ data: "json, name=primaryContactEmail" })
  primaryContactEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=primaryContactName" })
  primaryContactName?: string;

  @SpeakeasyMetadata({ data: "json, name=primaryContactPhone" })
  primaryContactPhone?: string;

  @SpeakeasyMetadata({ data: "json, name=reminderEmailsOptOut" })
  reminderEmailsOptOut?: boolean;

  @SpeakeasyMetadata({ data: "json, name=remoteSystemIds" })
  remoteSystemIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=supportContact" })
  supportContact?: string;

  @SpeakeasyMetadata({ data: "json, name=transmissionTypes" })
  transmissionTypes?: TransmissionTypes2;

  @SpeakeasyMetadata({ data: "json, name=wuCustomerId" })
  wuCustomerId?: string;
}
