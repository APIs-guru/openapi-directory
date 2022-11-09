import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DatabaseRestApiPost extends SpeakeasyBase {
  @Metadata({ data: "json, name=allow_csv_upload" })
  allowCsvUpload?: boolean;

  @Metadata({ data: "json, name=allow_ctas" })
  allowCtas?: boolean;

  @Metadata({ data: "json, name=allow_cvas" })
  allowCvas?: boolean;

  @Metadata({ data: "json, name=allow_dml" })
  allowDml?: boolean;

  @Metadata({ data: "json, name=allow_multi_schema_metadata_fetch" })
  allowMultiSchemaMetadataFetch?: boolean;

  @Metadata({ data: "json, name=allow_run_async" })
  allowRunAsync?: boolean;

  @Metadata({ data: "json, name=cache_timeout" })
  cacheTimeout?: number;

  @Metadata({ data: "json, name=configuration_method" })
  configurationMethod?: any;

  @Metadata({ data: "json, name=database_name" })
  databaseName: string;

  @Metadata({ data: "json, name=encrypted_extra" })
  encryptedExtra?: string;

  @Metadata({ data: "json, name=engine" })
  engine?: string;

  @Metadata({ data: "json, name=expose_in_sqllab" })
  exposeInSqllab?: boolean;

  @Metadata({ data: "json, name=extra" })
  extra?: string;

  @Metadata({ data: "json, name=force_ctas_schema" })
  forceCtasSchema?: string;

  @Metadata({ data: "json, name=impersonate_user" })
  impersonateUser?: boolean;

  @Metadata({ data: "json, name=parameters" })
  parameters?: Map<string, any>;

  @Metadata({ data: "json, name=server_cert" })
  serverCert?: string;

  @Metadata({ data: "json, name=sqlalchemy_uri" })
  sqlalchemyUri?: string;
}
