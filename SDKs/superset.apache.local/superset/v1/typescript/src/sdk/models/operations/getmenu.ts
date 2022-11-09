import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMenuSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetMenuRequest extends SpeakeasyBase {
  @Metadata()
  security: GetMenuSecurity;
}


export class GetMenu200ApplicationJsonResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=childs" })
  childs?: Map<string, any>[];

  @Metadata({ data: "json, name=icon" })
  icon?: string;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class GetMenu200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=result", elemType: operations.GetMenu200ApplicationJsonResult })
  result?: GetMenu200ApplicationJsonResult[];
}


export class GetMenu401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetMenuResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getMenu200ApplicationJsonObject?: GetMenu200ApplicationJson;

  @Metadata()
  getMenu401ApplicationJsonObject?: GetMenu401ApplicationJson;

  @Metadata()
  statusCode: number;
}
