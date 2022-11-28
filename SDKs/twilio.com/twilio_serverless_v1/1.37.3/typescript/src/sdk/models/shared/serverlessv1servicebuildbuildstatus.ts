import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BuildStatusEnumStatusEnum } from "./buildstatusenumstatusenum";



export class ServerlessV1ServiceBuildBuildStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=service_sid" })
  serviceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: BuildStatusEnumStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
