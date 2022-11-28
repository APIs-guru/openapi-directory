import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class User extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=administrator" })
  administrator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=coordinateFormat" })
  coordinateFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=deviceLimit" })
  deviceLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=deviceReadonly" })
  deviceReadonly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=expirationTime" })
  expirationTime?: Date;

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

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;

  @SpeakeasyMetadata({ data: "json, name=poiLayer" })
  poiLayer?: string;

  @SpeakeasyMetadata({ data: "json, name=readonly" })
  readonly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;

  @SpeakeasyMetadata({ data: "json, name=twelveHourFormat" })
  twelveHourFormat?: boolean;

  @SpeakeasyMetadata({ data: "json, name=userLimit" })
  userLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=zoom" })
  zoom?: number;
}
