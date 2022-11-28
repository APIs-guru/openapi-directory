import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class V3VehiclePosition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bearing" })
  bearing?: number;

  @SpeakeasyMetadata({ data: "json, name=datetime_utc" })
  datetimeUtc?: Date;

  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction?: string;

  @SpeakeasyMetadata({ data: "json, name=easting" })
  easting?: number;

  @SpeakeasyMetadata({ data: "json, name=expiry_time" })
  expiryTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: number;

  @SpeakeasyMetadata({ data: "json, name=northing" })
  northing?: number;

  @SpeakeasyMetadata({ data: "json, name=supplier" })
  supplier?: string;
}
