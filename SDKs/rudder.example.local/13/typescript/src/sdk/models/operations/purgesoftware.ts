import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PurgeSoftware200ApplicationJsonActionEnum {
    PurgeSoftware = "purgeSoftware"
}

export enum PurgeSoftware200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class PurgeSoftware200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PurgeSoftware200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: string[];

  @Metadata({ data: "json, name=result" })
  result: PurgeSoftware200ApplicationJsonResultEnum;
}


export class PurgeSoftwareResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  purgeSoftware200ApplicationJsonObject?: PurgeSoftware200ApplicationJson;
}
