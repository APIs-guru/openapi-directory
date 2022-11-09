import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AutopilotV1RestoreAssistant extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=callback_events" })
  callbackEvents?: string;

  @Metadata({ data: "json, name=callback_url" })
  callbackUrl?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=development_stage" })
  developmentStage?: string;

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=latest_model_build_sid" })
  latestModelBuildSid?: string;

  @Metadata({ data: "json, name=log_queries" })
  logQueries?: boolean;

  @Metadata({ data: "json, name=needs_model_build" })
  needsModelBuild?: boolean;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=unique_name" })
  uniqueName?: string;
}
