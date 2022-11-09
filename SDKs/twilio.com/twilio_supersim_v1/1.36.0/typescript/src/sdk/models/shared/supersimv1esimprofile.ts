import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EsimProfileEnumStatusEnum } from "./esimprofileenumstatusenum";


export class SupersimV1EsimProfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=eid" })
  eid?: string;

  @Metadata({ data: "json, name=error_code" })
  errorCode?: string;

  @Metadata({ data: "json, name=error_message" })
  errorMessage?: string;

  @Metadata({ data: "json, name=iccid" })
  iccid?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=sim_sid" })
  simSid?: string;

  @Metadata({ data: "json, name=smdp_plus_address" })
  smdpPlusAddress?: string;

  @Metadata({ data: "json, name=status" })
  status?: EsimProfileEnumStatusEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
