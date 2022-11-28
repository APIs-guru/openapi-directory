import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WirelessV1SimDataSession extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=cell_id" })
  cellId?: string;

  @SpeakeasyMetadata({ data: "json, name=cell_location_estimate" })
  cellLocationEstimate?: any;

  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: Date;

  @SpeakeasyMetadata({ data: "json, name=imei" })
  imei?: string;

  @SpeakeasyMetadata({ data: "json, name=last_updated" })
  lastUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=operator_country" })
  operatorCountry?: string;

  @SpeakeasyMetadata({ data: "json, name=operator_mcc" })
  operatorMcc?: string;

  @SpeakeasyMetadata({ data: "json, name=operator_mnc" })
  operatorMnc?: string;

  @SpeakeasyMetadata({ data: "json, name=operator_name" })
  operatorName?: string;

  @SpeakeasyMetadata({ data: "json, name=packets_downloaded" })
  packetsDownloaded?: number;

  @SpeakeasyMetadata({ data: "json, name=packets_uploaded" })
  packetsUploaded?: number;

  @SpeakeasyMetadata({ data: "json, name=radio_link" })
  radioLink?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=sim_sid" })
  simSid?: string;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: Date;
}
