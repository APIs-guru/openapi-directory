import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EsimProfileEnumStatusEnum } from "./esimprofileenumstatusenum";



export class SupersimV1EsimProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=eid" })
  eid?: string;

  @SpeakeasyMetadata({ data: "json, name=error_code" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=error_message" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=iccid" })
  iccid?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=sim_sid" })
  simSid?: string;

  @SpeakeasyMetadata({ data: "json, name=smdp_plus_address" })
  smdpPlusAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: EsimProfileEnumStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
