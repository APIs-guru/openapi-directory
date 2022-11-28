import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SyncV1ServiceSyncStreamStreamMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: any;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;
}
