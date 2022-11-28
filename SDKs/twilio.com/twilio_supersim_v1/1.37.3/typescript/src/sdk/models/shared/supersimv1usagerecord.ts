import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SupersimV1UsageRecord extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=billed_unit" })
  billedUnit?: string;

  @SpeakeasyMetadata({ data: "json, name=data_download" })
  dataDownload?: number;

  @SpeakeasyMetadata({ data: "json, name=data_total" })
  dataTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=data_total_billed" })
  dataTotalBilled?: number;

  @SpeakeasyMetadata({ data: "json, name=data_upload" })
  dataUpload?: number;

  @SpeakeasyMetadata({ data: "json, name=fleet_sid" })
  fleetSid?: string;

  @SpeakeasyMetadata({ data: "json, name=iso_country" })
  isoCountry?: string;

  @SpeakeasyMetadata({ data: "json, name=network_sid" })
  networkSid?: string;

  @SpeakeasyMetadata({ data: "json, name=period" })
  period?: any;

  @SpeakeasyMetadata({ data: "json, name=sim_sid" })
  simSid?: string;
}
