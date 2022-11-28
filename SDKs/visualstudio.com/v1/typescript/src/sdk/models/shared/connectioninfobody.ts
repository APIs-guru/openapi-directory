import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConnectionInfoBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionServiceUri" })
  connectionServiceUri?: string;

  @SpeakeasyMetadata({ data: "json, name=connectionSessionId" })
  connectionSessionId?: string;

  @SpeakeasyMetadata({ data: "json, name=connectionSessionPath" })
  connectionSessionPath?: string;

  @SpeakeasyMetadata({ data: "json, name=hostPublicKeys" })
  hostPublicKeys?: string[];

  @SpeakeasyMetadata({ data: "json, name=relayEndpoint" })
  relayEndpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=relaySasToken" })
  relaySasToken?: string;

  @SpeakeasyMetadata({ data: "json, name=sessionToken" })
  sessionToken?: string;
}
