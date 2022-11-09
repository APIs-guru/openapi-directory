import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ApiV2010AccountTokenIceServers extends SpeakeasyBase {
  @Metadata({ data: "json, name=credential" })
  credential?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=urls" })
  urls?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;
}


export class ApiV2010AccountToken extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: string;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: string;

  @Metadata({ data: "json, name=ice_servers", elemType: shared.ApiV2010AccountTokenIceServers })
  iceServers?: ApiV2010AccountTokenIceServers[];

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=ttl" })
  ttl?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
