import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PreviewWirelessSimUsage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=commands_costs" })
  commandsCosts?: any;

  @SpeakeasyMetadata({ data: "json, name=commands_usage" })
  commandsUsage?: any;

  @SpeakeasyMetadata({ data: "json, name=data_costs" })
  dataCosts?: any;

  @SpeakeasyMetadata({ data: "json, name=data_usage" })
  dataUsage?: any;

  @SpeakeasyMetadata({ data: "json, name=period" })
  period?: any;

  @SpeakeasyMetadata({ data: "json, name=sim_sid" })
  simSid?: string;

  @SpeakeasyMetadata({ data: "json, name=sim_unique_name" })
  simUniqueName?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
