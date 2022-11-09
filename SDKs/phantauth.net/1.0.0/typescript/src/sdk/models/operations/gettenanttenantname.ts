import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTenantTenantnamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantname" })
  tenantname: string;
}


export class GetTenantTenantnameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTenantTenantnamePathParams;
}


export class GetTenantTenantname200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=@id" })
  atId?: string;

  @Metadata({ data: "json, name=about" })
  about?: string;

  @Metadata({ data: "json, name=attribution" })
  attribution?: string;

  @Metadata({ data: "json, name=depot" })
  depot?: string;

  @Metadata({ data: "json, name=depots" })
  depots?: any[];

  @Metadata({ data: "json, name=domain" })
  domain?: boolean;

  @Metadata({ data: "json, name=factories" })
  factories?: any[];

  @Metadata({ data: "json, name=factory" })
  factory?: string;

  @Metadata({ data: "json, name=favicon" })
  favicon?: string;

  @Metadata({ data: "json, name=issuer" })
  issuer: string;

  @Metadata({ data: "json, name=logo" })
  logo?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=script" })
  script?: string;

  @Metadata({ data: "json, name=sheet" })
  sheet?: string;

  @Metadata({ data: "json, name=sub" })
  sub: string;

  @Metadata({ data: "json, name=subtenant" })
  subtenant?: boolean;

  @Metadata({ data: "json, name=summary" })
  summary?: string;

  @Metadata({ data: "json, name=template" })
  template?: string;

  @Metadata({ data: "json, name=theme" })
  theme?: string;

  @Metadata({ data: "json, name=userinfo" })
  userinfo?: string;

  @Metadata({ data: "json, name=website" })
  website?: string;
}


export class GetTenantTenantnameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getTenantTenantname200ApplicationJsonObject?: GetTenantTenantname200ApplicationJson;

  @Metadata()
  statusCode: number;
}
