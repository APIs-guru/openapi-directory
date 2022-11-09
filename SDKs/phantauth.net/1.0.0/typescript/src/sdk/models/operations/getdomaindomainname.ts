import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDomainDomainnamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainname" })
  domainname: string;
}


export class GetDomainDomainnameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDomainDomainnamePathParams;
}


export class GetDomainDomainname200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=@id" })
  atId?: string;

  @Metadata({ data: "json, name=logo" })
  logo?: string;

  @Metadata({ data: "json, name=members" })
  members?: any[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=profile" })
  profile?: string;

  @Metadata({ data: "json, name=sub" })
  sub?: string;
}


export class GetDomainDomainnameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getDomainDomainname200ApplicationJsonObject?: GetDomainDomainname200ApplicationJson;

  @Metadata()
  statusCode: number;
}
