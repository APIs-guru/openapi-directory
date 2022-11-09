import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BuildEnumRuntimeEnum } from "./buildenumruntimeenum";
import { BuildEnumStatusEnum } from "./buildenumstatusenum";


export class ServerlessV1ServiceBuild extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=asset_versions" })
  assetVersions?: any[];

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=dependencies" })
  dependencies?: any[];

  @Metadata({ data: "json, name=function_versions" })
  functionVersions?: any[];

  @Metadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=runtime" })
  runtime?: BuildEnumRuntimeEnum;

  @Metadata({ data: "json, name=service_sid" })
  serviceSid?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=status" })
  status?: BuildEnumStatusEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
