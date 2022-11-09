import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ConnectionInfoBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectionServiceUri" })
  connectionServiceUri?: string;

  @Metadata({ data: "json, name=connectionSessionId" })
  connectionSessionId?: string;

  @Metadata({ data: "json, name=connectionSessionPath" })
  connectionSessionPath?: string;

  @Metadata({ data: "json, name=hostPublicKeys" })
  hostPublicKeys?: string[];

  @Metadata({ data: "json, name=relayEndpoint" })
  relayEndpoint?: string;

  @Metadata({ data: "json, name=relaySasToken" })
  relaySasToken?: string;

  @Metadata({ data: "json, name=sessionToken" })
  sessionToken?: string;
}
