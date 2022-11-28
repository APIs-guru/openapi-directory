import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetAdminRecordingsStatus200ApplicationJsonStatusEnum {
    NeverStarted = "NeverStarted",
    Recording = "Recording",
    Stopped = "Stopped"
}


export class GetAdminRecordingsStatus200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GetAdminRecordingsStatus200ApplicationJsonStatusEnum;
}


export class GetAdminRecordingsStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getAdminRecordingsStatus200ApplicationJsonObject?: GetAdminRecordingsStatus200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
