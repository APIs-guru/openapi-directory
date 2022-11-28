import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DatabaseRestApiPut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_csv_upload" })
  allowCsvUpload?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allow_ctas" })
  allowCtas?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allow_cvas" })
  allowCvas?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allow_dml" })
  allowDml?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allow_multi_schema_metadata_fetch" })
  allowMultiSchemaMetadataFetch?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allow_run_async" })
  allowRunAsync?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cache_timeout" })
  cacheTimeout?: number;

  @SpeakeasyMetadata({ data: "json, name=configuration_method" })
  configurationMethod?: any;

  @SpeakeasyMetadata({ data: "json, name=database_name" })
  databaseName?: string;

  @SpeakeasyMetadata({ data: "json, name=encrypted_extra" })
  encryptedExtra?: string;

  @SpeakeasyMetadata({ data: "json, name=engine" })
  engine?: string;

  @SpeakeasyMetadata({ data: "json, name=expose_in_sqllab" })
  exposeInSqllab?: boolean;

  @SpeakeasyMetadata({ data: "json, name=extra" })
  extra?: string;

  @SpeakeasyMetadata({ data: "json, name=force_ctas_schema" })
  forceCtasSchema?: string;

  @SpeakeasyMetadata({ data: "json, name=impersonate_user" })
  impersonateUser?: boolean;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=server_cert" })
  serverCert?: string;

  @SpeakeasyMetadata({ data: "json, name=sqlalchemy_uri" })
  sqlalchemyUri?: string;
}
