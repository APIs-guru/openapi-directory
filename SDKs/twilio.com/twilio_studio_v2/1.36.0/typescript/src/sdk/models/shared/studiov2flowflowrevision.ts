import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FlowRevisionEnumStatusEnum } from "./flowrevisionenumstatusenum";


export class StudioV2FlowFlowRevision extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=commit_message" })
  commitMessage?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=definition" })
  definition?: any;

  @Metadata({ data: "json, name=errors" })
  errors?: any[];

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=revision" })
  revision?: number;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=status" })
  status?: FlowRevisionEnumStatusEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=valid" })
  valid?: boolean;
}
