import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ReadCvEfromFs200ApplicationJsonActionEnum {
    ReadCvEfromFs = "readCVEfromFS"
}


export class ReadCvEfromFs200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=CVEs" })
  cvEs: number;
}

export enum ReadCvEfromFs200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class ReadCvEfromFs200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: ReadCvEfromFs200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: ReadCvEfromFs200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: ReadCvEfromFs200ApplicationJsonResultEnum;
}


export class ReadCvEfromFsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  readCvEfromFs200ApplicationJsonObject?: ReadCvEfromFs200ApplicationJson;
}
