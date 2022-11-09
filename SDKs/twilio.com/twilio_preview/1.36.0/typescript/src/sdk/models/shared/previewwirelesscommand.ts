import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PreviewWirelessCommand extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=command" })
  command?: string;

  @Metadata({ data: "json, name=command_mode" })
  commandMode?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=device_sid" })
  deviceSid?: string;

  @Metadata({ data: "json, name=direction" })
  direction?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=sim_sid" })
  simSid?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
