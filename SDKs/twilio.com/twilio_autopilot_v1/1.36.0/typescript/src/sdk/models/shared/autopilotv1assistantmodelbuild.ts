import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ModelBuildEnumStatusEnum } from "./modelbuildenumstatusenum";


export class AutopilotV1AssistantModelBuild extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=assistant_sid" })
  assistantSid?: string;

  @Metadata({ data: "json, name=build_duration" })
  buildDuration?: number;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=error_code" })
  errorCode?: number;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=status" })
  status?: ModelBuildEnumStatusEnum;

  @Metadata({ data: "json, name=unique_name" })
  uniqueName?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
