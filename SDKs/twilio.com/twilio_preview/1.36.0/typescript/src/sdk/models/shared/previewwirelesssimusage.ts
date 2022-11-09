import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PreviewWirelessSimUsage extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=commands_costs" })
  commandsCosts?: any;

  @Metadata({ data: "json, name=commands_usage" })
  commandsUsage?: any;

  @Metadata({ data: "json, name=data_costs" })
  dataCosts?: any;

  @Metadata({ data: "json, name=data_usage" })
  dataUsage?: any;

  @Metadata({ data: "json, name=period" })
  period?: any;

  @Metadata({ data: "json, name=sim_sid" })
  simSid?: string;

  @Metadata({ data: "json, name=sim_unique_name" })
  simUniqueName?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
