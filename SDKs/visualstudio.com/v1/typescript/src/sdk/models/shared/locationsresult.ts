import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LocationsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=available" })
  available?: number[];

  @SpeakeasyMetadata({ data: "json, name=current" })
  current?: number;

  @SpeakeasyMetadata({ data: "json, name=hostnames" })
  hostnames?: Map<string, string>;
}
