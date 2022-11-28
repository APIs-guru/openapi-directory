import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CallLog extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=charge" })
  charge?: number;

  @SpeakeasyMetadata({ data: "json, name=destination_device_name" })
  destinationDeviceName?: string;

  @SpeakeasyMetadata({ data: "json, name=destination_extension" })
  destinationExtension?: number;

  @SpeakeasyMetadata({ data: "json, name=destination_sip_id" })
  destinationSipId?: string;

  @SpeakeasyMetadata({ data: "json, name=destination_user" })
  destinationUser?: string;

  @SpeakeasyMetadata({ data: "json, name=destination_user_full_name" })
  destinationUserFullName?: string;

  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction?: string;

  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: string;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=in_network" })
  inNetwork?: boolean;

  @SpeakeasyMetadata({ data: "json, name=international" })
  international?: boolean;

  @SpeakeasyMetadata({ data: "json, name=length" })
  length?: number;

  @SpeakeasyMetadata({ data: "json, name=rate" })
  rate?: number;

  @SpeakeasyMetadata({ data: "json, name=recorded" })
  recorded?: boolean;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: string;

  @SpeakeasyMetadata({ data: "json, name=source_device_name" })
  sourceDeviceName?: string;

  @SpeakeasyMetadata({ data: "json, name=source_extension" })
  sourceExtension?: number;

  @SpeakeasyMetadata({ data: "json, name=source_sip_id" })
  sourceSipId?: string;

  @SpeakeasyMetadata({ data: "json, name=source_user" })
  sourceUser?: string;

  @SpeakeasyMetadata({ data: "json, name=source_user_full_name" })
  sourceUserFullName?: string;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;
}
