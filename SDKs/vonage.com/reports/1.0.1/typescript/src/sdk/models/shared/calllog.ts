import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CallLog extends SpeakeasyBase {
  @Metadata({ data: "json, name=charge" })
  charge?: number;

  @Metadata({ data: "json, name=destination_device_name" })
  destinationDeviceName?: string;

  @Metadata({ data: "json, name=destination_extension" })
  destinationExtension?: number;

  @Metadata({ data: "json, name=destination_sip_id" })
  destinationSipId?: string;

  @Metadata({ data: "json, name=destination_user" })
  destinationUser?: string;

  @Metadata({ data: "json, name=destination_user_full_name" })
  destinationUserFullName?: string;

  @Metadata({ data: "json, name=direction" })
  direction?: string;

  @Metadata({ data: "json, name=end" })
  end?: string;

  @Metadata({ data: "json, name=from" })
  from?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=in_network" })
  inNetwork?: boolean;

  @Metadata({ data: "json, name=international" })
  international?: boolean;

  @Metadata({ data: "json, name=length" })
  length?: number;

  @Metadata({ data: "json, name=rate" })
  rate?: number;

  @Metadata({ data: "json, name=recorded" })
  recorded?: boolean;

  @Metadata({ data: "json, name=result" })
  result?: string;

  @Metadata({ data: "json, name=source_device_name" })
  sourceDeviceName?: string;

  @Metadata({ data: "json, name=source_extension" })
  sourceExtension?: number;

  @Metadata({ data: "json, name=source_sip_id" })
  sourceSipId?: string;

  @Metadata({ data: "json, name=source_user" })
  sourceUser?: string;

  @Metadata({ data: "json, name=source_user_full_name" })
  sourceUserFullName?: string;

  @Metadata({ data: "json, name=start" })
  start?: string;

  @Metadata({ data: "json, name=to" })
  to?: string;
}
