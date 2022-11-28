import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FlowEnumStatusEnum } from "./flowenumstatusenum";



export class StudioV2Flow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=commit_message" })
  commitMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=definition" })
  definition?: any;

  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: any[];

  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision?: number;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: FlowEnumStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=valid" })
  valid?: boolean;

  @SpeakeasyMetadata({ data: "json, name=warnings" })
  warnings?: any[];

  @SpeakeasyMetadata({ data: "json, name=webhook_url" })
  webhookUrl?: string;
}
