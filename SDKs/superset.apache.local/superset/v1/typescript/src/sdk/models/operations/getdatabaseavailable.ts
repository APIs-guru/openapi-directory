import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDatabaseAvailableSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetDatabaseAvailable200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=available_drivers" })
  availableDrivers?: string[];

  @SpeakeasyMetadata({ data: "json, name=default_driver" })
  defaultDriver?: string;

  @SpeakeasyMetadata({ data: "json, name=engine" })
  engine?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=preferred" })
  preferred?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sqlalchemy_uri_placeholder" })
  sqlalchemyUriPlaceholder?: string;
}


export class GetDatabaseAvailable400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabaseAvailable500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabaseAvailableRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetDatabaseAvailableSecurity;
}


export class GetDatabaseAvailableResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: GetDatabaseAvailable200ApplicationJson })
  getDatabaseAvailable200ApplicationJsonObjects?: GetDatabaseAvailable200ApplicationJson[];

  @SpeakeasyMetadata()
  getDatabaseAvailable400ApplicationJsonObject?: GetDatabaseAvailable400ApplicationJson;

  @SpeakeasyMetadata()
  getDatabaseAvailable500ApplicationJsonObject?: GetDatabaseAvailable500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
