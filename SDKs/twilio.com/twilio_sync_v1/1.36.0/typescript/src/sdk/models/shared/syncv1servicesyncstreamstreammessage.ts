import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SyncV1ServiceSyncStreamStreamMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: any;

  @Metadata({ data: "json, name=sid" })
  sid?: string;
}
