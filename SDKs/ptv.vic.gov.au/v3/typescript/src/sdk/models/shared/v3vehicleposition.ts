import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class V3VehiclePosition extends SpeakeasyBase {
  @Metadata({ data: "json, name=bearing" })
  bearing?: number;

  @Metadata({ data: "json, name=datetime_utc" })
  datetimeUtc?: Date;

  @Metadata({ data: "json, name=direction" })
  direction?: string;

  @Metadata({ data: "json, name=easting" })
  easting?: number;

  @Metadata({ data: "json, name=expiry_time" })
  expiryTime?: Date;

  @Metadata({ data: "json, name=latitude" })
  latitude?: number;

  @Metadata({ data: "json, name=longitude" })
  longitude?: number;

  @Metadata({ data: "json, name=northing" })
  northing?: number;

  @Metadata({ data: "json, name=supplier" })
  supplier?: string;
}
