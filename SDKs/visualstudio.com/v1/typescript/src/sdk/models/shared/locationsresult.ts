import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LocationsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=available" })
  available?: number[];

  @Metadata({ data: "json, name=current" })
  current?: number;

  @Metadata({ data: "json, name=hostnames" })
  hostnames?: Map<string, string>;
}
