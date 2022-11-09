import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SystemDataSpatialDbGeographyWellKnownValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=coordinateSystemId" })
  coordinateSystemId?: number;

  @Metadata({ data: "json, name=wellKnownBinary" })
  wellKnownBinary?: string;

  @Metadata({ data: "json, name=wellKnownText" })
  wellKnownText?: string;
}
