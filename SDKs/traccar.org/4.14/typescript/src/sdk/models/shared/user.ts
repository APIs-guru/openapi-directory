import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class User extends SpeakeasyBase {
  @Metadata({ data: "json, name=administrator" })
  administrator?: boolean;

  @Metadata({ data: "json, name=attributes" })
  attributes?: Map<string, any>;

  @Metadata({ data: "json, name=coordinateFormat" })
  coordinateFormat?: string;

  @Metadata({ data: "json, name=deviceLimit" })
  deviceLimit?: number;

  @Metadata({ data: "json, name=deviceReadonly" })
  deviceReadonly?: boolean;

  @Metadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=expirationTime" })
  expirationTime?: Date;

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

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=phone" })
  phone?: string;

  @Metadata({ data: "json, name=poiLayer" })
  poiLayer?: string;

  @Metadata({ data: "json, name=readonly" })
  readonly?: boolean;

  @Metadata({ data: "json, name=token" })
  token?: string;

  @Metadata({ data: "json, name=twelveHourFormat" })
  twelveHourFormat?: boolean;

  @Metadata({ data: "json, name=userLimit" })
  userLimit?: number;

  @Metadata({ data: "json, name=zoom" })
  zoom?: number;
}
