import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTenantTenantnamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantname" })
  tenantname: string;
}


export class GetTenantTenantname200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=@id" })
  atId?: string;

  @SpeakeasyMetadata({ data: "json, name=about" })
  about?: string;

  @SpeakeasyMetadata({ data: "json, name=attribution" })
  attribution?: string;

  @SpeakeasyMetadata({ data: "json, name=depot" })
  depot?: string;

  @SpeakeasyMetadata({ data: "json, name=depots" })
  depots?: any[];

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: boolean;

  @SpeakeasyMetadata({ data: "json, name=factories" })
  factories?: any[];

  @SpeakeasyMetadata({ data: "json, name=factory" })
  factory?: string;

  @SpeakeasyMetadata({ data: "json, name=favicon" })
  favicon?: string;

  @SpeakeasyMetadata({ data: "json, name=issuer" })
  issuer: string;

  @SpeakeasyMetadata({ data: "json, name=logo" })
  logo?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=script" })
  script?: string;

  @SpeakeasyMetadata({ data: "json, name=sheet" })
  sheet?: string;

  @SpeakeasyMetadata({ data: "json, name=sub" })
  sub: string;

  @SpeakeasyMetadata({ data: "json, name=subtenant" })
  subtenant?: boolean;

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: string;

  @SpeakeasyMetadata({ data: "json, name=template" })
  template?: string;

  @SpeakeasyMetadata({ data: "json, name=theme" })
  theme?: string;

  @SpeakeasyMetadata({ data: "json, name=userinfo" })
  userinfo?: string;

  @SpeakeasyMetadata({ data: "json, name=website" })
  website?: string;
}


export class GetTenantTenantnameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTenantTenantnamePathParams;
}


export class GetTenantTenantnameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getTenantTenantname200ApplicationJsonObject?: GetTenantTenantname200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
