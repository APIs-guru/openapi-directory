import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OptionalGeoPointContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=formatted" })
  formatted?: string;

  @Metadata({ data: "json, name=hasValue" })
  hasValue?: boolean;

  @Metadata({ data: "json, name=latitude" })
  latitude?: number;

  @Metadata({ data: "json, name=longitude" })
  longitude?: number;
}
