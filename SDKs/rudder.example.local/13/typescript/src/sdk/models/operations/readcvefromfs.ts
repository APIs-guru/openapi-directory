import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ReadCvEfromFs200ApplicationJsonActionEnum {
    ReadCvEfromFs = "readCVEfromFS"
}


export class ReadCvEfromFs200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CVEs" })
  cvEs: number;
}

export enum ReadCvEfromFs200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class ReadCvEfromFs200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: ReadCvEfromFs200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: ReadCvEfromFs200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: ReadCvEfromFs200ApplicationJsonResultEnum;
}


export class ReadCvEfromFsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  readCvEfromFs200ApplicationJsonObject?: ReadCvEfromFs200ApplicationJson;
}
