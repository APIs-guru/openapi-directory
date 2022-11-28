import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Server extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=bingKey" })
  bingKey?: string;

  @SpeakeasyMetadata({ data: "json, name=coordinateFormat" })
  coordinateFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=deviceReadonly" })
  deviceReadonly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=forceSettings" })
  forceSettings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "json, name=limitCommands" })
  limitCommands?: boolean;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: number;

  @SpeakeasyMetadata({ data: "json, name=map" })
  map?: string;

  @SpeakeasyMetadata({ data: "json, name=mapUrl" })
  mapUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=poiLayer" })
  poiLayer?: string;

  @SpeakeasyMetadata({ data: "json, name=readonly" })
  readonly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=registration" })
  registration?: boolean;

  @SpeakeasyMetadata({ data: "json, name=twelveHourFormat" })
  twelveHourFormat?: boolean;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;

  @SpeakeasyMetadata({ data: "json, name=zoom" })
  zoom?: number;
}
