import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LogEnumLevelEnum } from "./logenumlevelenum";


export class ServerlessV1ServiceEnvironmentLog extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=build_sid" })
  buildSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=deployment_sid" })
  deploymentSid?: string;

  @Metadata({ data: "json, name=environment_sid" })
  environmentSid?: string;

  @Metadata({ data: "json, name=function_sid" })
  functionSid?: string;

  @Metadata({ data: "json, name=level" })
  level?: LogEnumLevelEnum;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=request_sid" })
  requestSid?: string;

  @Metadata({ data: "json, name=service_sid" })
  serviceSid?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
