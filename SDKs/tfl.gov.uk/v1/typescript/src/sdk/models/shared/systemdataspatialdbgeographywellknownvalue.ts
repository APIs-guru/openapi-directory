import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SystemDataSpatialDbGeographyWellKnownValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=coordinateSystemId" })
  coordinateSystemId?: number;

  @SpeakeasyMetadata({ data: "json, name=wellKnownBinary" })
  wellKnownBinary?: string;

  @SpeakeasyMetadata({ data: "json, name=wellKnownText" })
  wellKnownText?: string;
}
