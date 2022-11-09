import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StreamEnumStatusEnum } from "./streamenumstatusenum";


export class ApiV2010AccountCallStream extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=call_sid" })
  callSid?: string;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=status" })
  status?: StreamEnumStatusEnum;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
