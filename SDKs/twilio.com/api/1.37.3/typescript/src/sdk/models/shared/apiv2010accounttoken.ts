import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiV2010AccountTokenIceServers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=credential" })
  credential?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=urls" })
  urls?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}


export class ApiV2010AccountToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: string;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=ice_servers", elemType: ApiV2010AccountTokenIceServers })
  iceServers?: ApiV2010AccountTokenIceServers[];

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
