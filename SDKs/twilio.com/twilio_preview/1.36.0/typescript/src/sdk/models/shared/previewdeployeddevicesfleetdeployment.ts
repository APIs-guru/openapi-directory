import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PreviewDeployedDevicesFleetDeployment extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=fleet_sid" })
  fleetSid?: string;

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=sync_service_sid" })
  syncServiceSid?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
