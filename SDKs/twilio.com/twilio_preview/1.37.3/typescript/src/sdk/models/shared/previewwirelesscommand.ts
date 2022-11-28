import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PreviewWirelessCommand extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=command" })
  command?: string;

  @SpeakeasyMetadata({ data: "json, name=command_mode" })
  commandMode?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=device_sid" })
  deviceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=sim_sid" })
  simSid?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
