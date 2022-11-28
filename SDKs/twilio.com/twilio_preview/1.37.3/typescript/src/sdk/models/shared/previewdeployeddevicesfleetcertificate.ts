import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PreviewDeployedDevicesFleetCertificate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=device_sid" })
  deviceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=fleet_sid" })
  fleetSid?: string;

  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=thumbprint" })
  thumbprint?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
