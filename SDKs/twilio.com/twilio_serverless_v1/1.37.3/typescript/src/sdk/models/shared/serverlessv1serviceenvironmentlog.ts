import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LogEnumLevelEnum } from "./logenumlevelenum";



export class ServerlessV1ServiceEnvironmentLog extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=build_sid" })
  buildSid?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=deployment_sid" })
  deploymentSid?: string;

  @SpeakeasyMetadata({ data: "json, name=environment_sid" })
  environmentSid?: string;

  @SpeakeasyMetadata({ data: "json, name=function_sid" })
  functionSid?: string;

  @SpeakeasyMetadata({ data: "json, name=level" })
  level?: LogEnumLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=request_sid" })
  requestSid?: string;

  @SpeakeasyMetadata({ data: "json, name=service_sid" })
  serviceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
