import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StreamEnumStatusEnum } from "./streamenumstatusenum";



export class ApiV2010AccountCallStream extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=call_sid" })
  callSid?: string;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: StreamEnumStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
