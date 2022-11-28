import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FlowRevisionEnumStatusEnum } from "./flowrevisionenumstatusenum";



export class StudioV2FlowFlowRevision extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision?: number;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: FlowRevisionEnumStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=valid" })
  valid?: boolean;
}
