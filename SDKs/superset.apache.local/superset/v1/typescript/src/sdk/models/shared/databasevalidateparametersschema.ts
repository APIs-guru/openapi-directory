import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DatabaseValidateParametersSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=configuration_method" })
  configurationMethod: any;

  @Metadata({ data: "json, name=database_name" })
  databaseName?: string;

  @Metadata({ data: "json, name=encrypted_extra" })
  encryptedExtra?: string;

  @Metadata({ data: "json, name=engine" })
  engine: string;

  @Metadata({ data: "json, name=extra" })
  extra?: string;

  @Metadata({ data: "json, name=impersonate_user" })
  impersonateUser?: boolean;

  @Metadata({ data: "json, name=parameters" })
  parameters?: Map<string, any>;

  @Metadata({ data: "json, name=server_cert" })
  serverCert?: string;
}
