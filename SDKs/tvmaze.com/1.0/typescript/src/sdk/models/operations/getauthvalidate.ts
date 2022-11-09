import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAuthValidate200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=premium" })
  premium?: number;
}


export class GetAuthValidateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getAuthValidate200ApplicationJsonObject?: GetAuthValidate200ApplicationJson;

  @Metadata()
  statusCode: number;
}
