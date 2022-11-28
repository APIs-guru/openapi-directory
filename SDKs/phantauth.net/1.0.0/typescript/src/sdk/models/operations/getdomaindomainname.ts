import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDomainDomainnamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainname" })
  domainname: string;
}


export class GetDomainDomainname200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=@id" })
  atId?: string;

  @SpeakeasyMetadata({ data: "json, name=logo" })
  logo?: string;

  @SpeakeasyMetadata({ data: "json, name=members" })
  members?: any[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=profile" })
  profile?: string;

  @SpeakeasyMetadata({ data: "json, name=sub" })
  sub?: string;
}


export class GetDomainDomainnameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDomainDomainnamePathParams;
}


export class GetDomainDomainnameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getDomainDomainname200ApplicationJsonObject?: GetDomainDomainname200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
