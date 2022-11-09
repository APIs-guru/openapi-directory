import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BuildStatusEnumStatusEnum } from "./buildstatusenumstatusenum";


export class ServerlessV1ServiceBuildBuildStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=service_sid" })
  serviceSid?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=status" })
  status?: BuildStatusEnumStatusEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
