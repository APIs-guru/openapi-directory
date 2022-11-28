import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BuildEnumRuntimeEnum } from "./buildenumruntimeenum";
import { BuildEnumStatusEnum } from "./buildenumstatusenum";



export class ServerlessV1ServiceBuild extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=asset_versions" })
  assetVersions?: any[];

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=dependencies" })
  dependencies?: any[];

  @SpeakeasyMetadata({ data: "json, name=function_versions" })
  functionVersions?: any[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=runtime" })
  runtime?: BuildEnumRuntimeEnum;

  @SpeakeasyMetadata({ data: "json, name=service_sid" })
  serviceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: BuildEnumStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
