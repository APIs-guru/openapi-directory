import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNumbersAreacodes200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


export class GetNumbersAreacodesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getNumbersAreacodes200ApplicationJsonObject?: GetNumbersAreacodes200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
