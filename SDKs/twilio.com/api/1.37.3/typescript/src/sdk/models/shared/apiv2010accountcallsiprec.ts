import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SiprecEnumStatusEnum } from "./siprecenumstatusenum";



export class ApiV2010AccountCallSiprec extends SpeakeasyBase {
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
  status?: SiprecEnumStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
