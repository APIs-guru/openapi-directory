import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDomainsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=teamId" })
  teamId?: string;
}

export enum GetDomains200ApplicationJsonDomainsServiceTypeEnum {
    ZeitWorld = "zeit.world",
    External = "external",
    Na = "na"
}


export class GetDomains200ApplicationJsonDomains extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boughtAt" })
  boughtAt: number;

  @SpeakeasyMetadata({ data: "json, name=cdnEnabled" })
  cdnEnabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: number;

  @SpeakeasyMetadata({ data: "json, name=expiresAt" })
  expiresAt: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=intendedNameservers" })
  intendedNameservers: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=nameservers" })
  nameservers: string[];

  @SpeakeasyMetadata({ data: "json, name=nsVerifiedAt" })
  nsVerifiedAt: number;

  @SpeakeasyMetadata({ data: "json, name=orderedAt" })
  orderedAt?: number;

  @SpeakeasyMetadata({ data: "json, name=serviceType" })
  serviceType: GetDomains200ApplicationJsonDomainsServiceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=transferredAt" })
  transferredAt?: number;

  @SpeakeasyMetadata({ data: "json, name=txtVerifiedAt" })
  txtVerifiedAt: number;

  @SpeakeasyMetadata({ data: "json, name=verificationRecord" })
  verificationRecord: string;

  @SpeakeasyMetadata({ data: "json, name=verified" })
  verified: boolean;
}


export class GetDomains200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domains", elemType: GetDomains200ApplicationJsonDomains })
  domains: GetDomains200ApplicationJsonDomains[];
}


export class GetDomainsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDomainsQueryParams;
}


export class GetDomainsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDomains200ApplicationJsonObject?: GetDomains200ApplicationJson;
}
