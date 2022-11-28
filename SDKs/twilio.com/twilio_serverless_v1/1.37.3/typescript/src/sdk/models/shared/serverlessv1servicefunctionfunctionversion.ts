import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FunctionVersionEnumVisibilityEnum } from "./functionversionenumvisibilityenum";



export class ServerlessV1ServiceFunctionFunctionVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=function_sid" })
  functionSid?: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=service_sid" })
  serviceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=visibility" })
  visibility?: FunctionVersionEnumVisibilityEnum;
}
