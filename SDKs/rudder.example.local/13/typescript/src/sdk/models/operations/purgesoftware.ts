import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PurgeSoftware200ApplicationJsonActionEnum {
    PurgeSoftware = "purgeSoftware"
}

export enum PurgeSoftware200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class PurgeSoftware200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: PurgeSoftware200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: string[];

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: PurgeSoftware200ApplicationJsonResultEnum;
}


export class PurgeSoftwareResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  purgeSoftware200ApplicationJsonObject?: PurgeSoftware200ApplicationJson;
}
