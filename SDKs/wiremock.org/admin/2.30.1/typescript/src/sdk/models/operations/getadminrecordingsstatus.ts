import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetAdminRecordingsStatus200ApplicationJsonStatusEnum {
    NeverStarted = "NeverStarted"
,    Recording = "Recording"
,    Stopped = "Stopped"
}


export class GetAdminRecordingsStatus200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: GetAdminRecordingsStatus200ApplicationJsonStatusEnum;
}


export class GetAdminRecordingsStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getAdminRecordingsStatus200ApplicationJsonObject?: GetAdminRecordingsStatus200ApplicationJson;

  @Metadata()
  statusCode: number;
}
