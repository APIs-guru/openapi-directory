import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDomainsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=teamId" })
  teamId?: string;
}


export class GetDomainsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDomainsQueryParams;
}

export enum GetDomains200ApplicationJsonDomainsServiceTypeEnum {
    ZeitWorld = "zeit.world"
,    External = "external"
,    Na = "na"
}


export class GetDomains200ApplicationJsonDomains extends SpeakeasyBase {
  @Metadata({ data: "json, name=boughtAt" })
  boughtAt: number;

  @Metadata({ data: "json, name=cdnEnabled" })
  cdnEnabled: boolean;

  @Metadata({ data: "json, name=createdAt" })
  createdAt: number;

  @Metadata({ data: "json, name=expiresAt" })
  expiresAt: number;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=intendedNameservers" })
  intendedNameservers: string[];

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=nameservers" })
  nameservers: string[];

  @Metadata({ data: "json, name=nsVerifiedAt" })
  nsVerifiedAt: number;

  @Metadata({ data: "json, name=orderedAt" })
  orderedAt?: number;

  @Metadata({ data: "json, name=serviceType" })
  serviceType: GetDomains200ApplicationJsonDomainsServiceTypeEnum;

  @Metadata({ data: "json, name=transferredAt" })
  transferredAt?: number;

  @Metadata({ data: "json, name=txtVerifiedAt" })
  txtVerifiedAt: number;

  @Metadata({ data: "json, name=verificationRecord" })
  verificationRecord: string;

  @Metadata({ data: "json, name=verified" })
  verified: boolean;
}


export class GetDomains200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=domains", elemType: operations.GetDomains200ApplicationJsonDomains })
  domains: GetDomains200ApplicationJsonDomains[];
}


export class GetDomainsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDomains200ApplicationJsonObject?: GetDomains200ApplicationJson;
}
