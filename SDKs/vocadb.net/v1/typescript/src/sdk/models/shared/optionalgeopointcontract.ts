import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OptionalGeoPointContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=formatted" })
  formatted?: string;

  @SpeakeasyMetadata({ data: "json, name=hasValue" })
  hasValue?: boolean;

  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: number;
}
