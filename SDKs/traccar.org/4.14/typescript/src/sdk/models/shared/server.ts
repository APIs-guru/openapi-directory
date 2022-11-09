import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Server extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes?: Map<string, any>;

  @Metadata({ data: "json, name=bingKey" })
  bingKey?: string;

  @Metadata({ data: "json, name=coordinateFormat" })
  coordinateFormat?: string;

  @Metadata({ data: "json, name=deviceReadonly" })
  deviceReadonly?: boolean;

  @Metadata({ data: "json, name=forceSettings" })
  forceSettings?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=latitude" })
  latitude?: number;

  @Metadata({ data: "json, name=limitCommands" })
  limitCommands?: boolean;

  @Metadata({ data: "json, name=longitude" })
  longitude?: number;

  @Metadata({ data: "json, name=map" })
  map?: string;

  @Metadata({ data: "json, name=mapUrl" })
  mapUrl?: string;

  @Metadata({ data: "json, name=poiLayer" })
  poiLayer?: string;

  @Metadata({ data: "json, name=readonly" })
  readonly?: boolean;

  @Metadata({ data: "json, name=registration" })
  registration?: boolean;

  @Metadata({ data: "json, name=twelveHourFormat" })
  twelveHourFormat?: boolean;

  @Metadata({ data: "json, name=version" })
  version?: string;

  @Metadata({ data: "json, name=zoom" })
  zoom?: number;
}
