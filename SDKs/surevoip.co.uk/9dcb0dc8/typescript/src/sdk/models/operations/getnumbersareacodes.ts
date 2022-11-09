import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNumbersAreacodes200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=name" })
  name: string;
}


export class GetNumbersAreacodesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getNumbersAreacodes200ApplicationJsonObject?: GetNumbersAreacodes200ApplicationJson;

  @Metadata()
  statusCode: number;
}
