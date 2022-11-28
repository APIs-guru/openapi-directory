import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PayorAddress } from "./payoraddress";
import { KycStateEnum } from "./kycstateenum";
import { TransmissionTypes } from "./transmissiontypes";


export enum PayorV1LanguageEnum {
    En = "EN",
    Fr = "FR"
}


export class PayorV1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: PayorAddress;

  @SpeakeasyMetadata({ data: "json, name=allowsLanguageChoice" })
  allowsLanguageChoice?: boolean;

  @SpeakeasyMetadata({ data: "json, name=collectiveAlias" })
  collectiveAlias?: string;

  @SpeakeasyMetadata({ data: "json, name=dbaName" })
  dbaName?: string;

  @SpeakeasyMetadata({ data: "json, name=fundingAccountAccountName" })
  fundingAccountAccountName?: string;

  @SpeakeasyMetadata({ data: "json, name=fundingAccountAccountNumber" })
  fundingAccountAccountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=fundingAccountRoutingNumber" })
  fundingAccountRoutingNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=includesReports" })
  includesReports?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kycState" })
  kycState?: KycStateEnum;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: PayorV1LanguageEnum;

  @SpeakeasyMetadata({ data: "json, name=manualLockout" })
  manualLockout?: boolean;

  @SpeakeasyMetadata({ data: "json, name=maxMasterPayorAdmins" })
  maxMasterPayorAdmins?: number;

  @SpeakeasyMetadata({ data: "json, name=payeeGracePeriodDays" })
  payeeGracePeriodDays?: number;

  @SpeakeasyMetadata({ data: "json, name=payeeGracePeriodProcessingEnabled" })
  payeeGracePeriodProcessingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=payorId" })
  payorId?: string;

  @SpeakeasyMetadata({ data: "json, name=payorName" })
  payorName: string;

  @SpeakeasyMetadata({ data: "json, name=primaryContactEmail" })
  primaryContactEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=primaryContactName" })
  primaryContactName?: string;

  @SpeakeasyMetadata({ data: "json, name=primaryContactPhone" })
  primaryContactPhone?: string;

  @SpeakeasyMetadata({ data: "json, name=reminderEmailsOptOut" })
  reminderEmailsOptOut?: boolean;

  @SpeakeasyMetadata({ data: "json, name=supportContact" })
  supportContact?: string;

  @SpeakeasyMetadata({ data: "json, name=transmissionTypes" })
  transmissionTypes?: TransmissionTypes;
}
