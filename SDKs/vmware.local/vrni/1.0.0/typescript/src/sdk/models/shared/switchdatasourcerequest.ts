import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PasswordCredentials } from "./passwordcredentials";


export class SwitchDataSourceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=credentials" })
  credentials?: PasswordCredentials;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=fqdn" })
  fqdn?: string;

  @Metadata({ data: "json, name=ip" })
  ip?: string;

  @Metadata({ data: "json, name=nickname" })
  nickname: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=proxy_id" })
  proxyId: string;
}
