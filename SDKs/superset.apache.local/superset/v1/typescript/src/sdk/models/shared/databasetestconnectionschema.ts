import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DatabaseTestConnectionSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configuration_method" })
  configurationMethod?: any;

  @SpeakeasyMetadata({ data: "json, name=database_name" })
  databaseName?: string;

  @SpeakeasyMetadata({ data: "json, name=encrypted_extra" })
  encryptedExtra?: string;

  @SpeakeasyMetadata({ data: "json, name=engine" })
  engine?: string;

  @SpeakeasyMetadata({ data: "json, name=extra" })
  extra?: string;

  @SpeakeasyMetadata({ data: "json, name=impersonate_user" })
  impersonateUser?: boolean;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=server_cert" })
  serverCert?: string;

  @SpeakeasyMetadata({ data: "json, name=sqlalchemy_uri" })
  sqlalchemyUri?: string;
}
