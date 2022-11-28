import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAuthValidate200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=premium" })
  premium?: number;
}


export class GetAuthValidateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getAuthValidate200ApplicationJsonObject?: GetAuthValidate200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
