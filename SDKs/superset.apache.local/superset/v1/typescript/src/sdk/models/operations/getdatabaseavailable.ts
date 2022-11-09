import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDatabaseAvailableSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetDatabaseAvailableRequest extends SpeakeasyBase {
  @Metadata()
  security: GetDatabaseAvailableSecurity;
}


export class GetDatabaseAvailable200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=available_drivers" })
  availableDrivers?: string[];

  @Metadata({ data: "json, name=default_driver" })
  defaultDriver?: string;

  @Metadata({ data: "json, name=engine" })
  engine?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parameters" })
  parameters?: Map<string, any>;

  @Metadata({ data: "json, name=preferred" })
  preferred?: boolean;

  @Metadata({ data: "json, name=sqlalchemy_uri_placeholder" })
  sqlalchemyUriPlaceholder?: string;
}


export class GetDatabaseAvailable400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabaseAvailable500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabaseAvailableResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: operations.GetDatabaseAvailable200ApplicationJson })
  getDatabaseAvailable200ApplicationJsonObjects?: GetDatabaseAvailable200ApplicationJson[];

  @Metadata()
  getDatabaseAvailable400ApplicationJsonObject?: GetDatabaseAvailable400ApplicationJson;

  @Metadata()
  getDatabaseAvailable500ApplicationJsonObject?: GetDatabaseAvailable500ApplicationJson;

  @Metadata()
  statusCode: number;
}
