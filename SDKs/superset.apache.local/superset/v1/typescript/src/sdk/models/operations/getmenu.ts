import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMenuSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetMenu200ApplicationJsonResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=childs" })
  childs?: Map<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=icon" })
  icon?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class GetMenu200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=result", elemType: GetMenu200ApplicationJsonResult })
  result?: GetMenu200ApplicationJsonResult[];
}


export class GetMenu401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetMenuRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetMenuSecurity;
}


export class GetMenuResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getMenu200ApplicationJsonObject?: GetMenu200ApplicationJson;

  @SpeakeasyMetadata()
  getMenu401ApplicationJsonObject?: GetMenu401ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
