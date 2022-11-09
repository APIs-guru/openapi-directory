import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ServerlessV1ServiceFunctionFunctionVersionFunctionVersionContent extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=function_sid" })
  functionSid?: string;

  @Metadata({ data: "json, name=service_sid" })
  serviceSid?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
