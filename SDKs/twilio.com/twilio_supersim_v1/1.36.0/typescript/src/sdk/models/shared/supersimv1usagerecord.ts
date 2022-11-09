import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SupersimV1UsageRecord extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=billed_unit" })
  billedUnit?: string;

  @Metadata({ data: "json, name=data_download" })
  dataDownload?: number;

  @Metadata({ data: "json, name=data_total" })
  dataTotal?: number;

  @Metadata({ data: "json, name=data_total_billed" })
  dataTotalBilled?: number;

  @Metadata({ data: "json, name=data_upload" })
  dataUpload?: number;

  @Metadata({ data: "json, name=fleet_sid" })
  fleetSid?: string;

  @Metadata({ data: "json, name=iso_country" })
  isoCountry?: string;

  @Metadata({ data: "json, name=network_sid" })
  networkSid?: string;

  @Metadata({ data: "json, name=period" })
  period?: any;

  @Metadata({ data: "json, name=sim_sid" })
  simSid?: string;
}
