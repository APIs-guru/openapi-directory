import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WirelessV1SimDataSession extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=cell_id" })
  cellId?: string;

  @Metadata({ data: "json, name=cell_location_estimate" })
  cellLocationEstimate?: any;

  @Metadata({ data: "json, name=end" })
  end?: Date;

  @Metadata({ data: "json, name=imei" })
  imei?: string;

  @Metadata({ data: "json, name=last_updated" })
  lastUpdated?: Date;

  @Metadata({ data: "json, name=operator_country" })
  operatorCountry?: string;

  @Metadata({ data: "json, name=operator_mcc" })
  operatorMcc?: string;

  @Metadata({ data: "json, name=operator_mnc" })
  operatorMnc?: string;

  @Metadata({ data: "json, name=operator_name" })
  operatorName?: string;

  @Metadata({ data: "json, name=packets_downloaded" })
  packetsDownloaded?: number;

  @Metadata({ data: "json, name=packets_uploaded" })
  packetsUploaded?: number;

  @Metadata({ data: "json, name=radio_link" })
  radioLink?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=sim_sid" })
  simSid?: string;

  @Metadata({ data: "json, name=start" })
  start?: Date;
}
