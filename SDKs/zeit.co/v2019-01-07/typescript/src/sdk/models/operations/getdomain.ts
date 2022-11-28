import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDomainPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetDomainQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=teamId" })
  teamId?: string;
}


export class GetDomain200ApplicationJsonDomainAliases extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alias" })
  alias: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}


export class GetDomain200ApplicationJsonDomainCerts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cns" })
  cns: string[];

  @SpeakeasyMetadata({ data: "json, name=created" })
  created: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}


// GetDomain200ApplicationJsonDomainCreator
/** 
 * Information about who added the domain
**/
export class GetDomain200ApplicationJsonDomainCreator extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customerId" })
  customerId?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=isDomainReseller" })
  isDomainReseller?: boolean;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username: string;
}

export enum GetDomain200ApplicationJsonDomainServiceTypeEnum {
    ZeitWorld = "zeit.world",
    External = "external",
    Na = "na"
}


// GetDomain200ApplicationJsonDomain
/** 
 * The domain information
**/
export class GetDomain200ApplicationJsonDomain extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aliases", elemType: GetDomain200ApplicationJsonDomainAliases })
  aliases: GetDomain200ApplicationJsonDomainAliases[];

  @SpeakeasyMetadata({ data: "json, name=boughtAt" })
  boughtAt: number;

  @SpeakeasyMetadata({ data: "json, name=cdnEnabled" })
  cdnEnabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=certs", elemType: GetDomain200ApplicationJsonDomainCerts })
  certs: GetDomain200ApplicationJsonDomainCerts[];

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: number;

  @SpeakeasyMetadata({ data: "json, name=creator" })
  creator: GetDomain200ApplicationJsonDomainCreator;

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
  serviceType: GetDomain200ApplicationJsonDomainServiceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=suffix" })
  suffix: boolean;

  @SpeakeasyMetadata({ data: "json, name=transferredAt" })
  transferredAt?: number;

  @SpeakeasyMetadata({ data: "json, name=txtVerifiedAt" })
  txtVerifiedAt: number;

  @SpeakeasyMetadata({ data: "json, name=verificationRecord" })
  verificationRecord: string;

  @SpeakeasyMetadata({ data: "json, name=verified" })
  verified: boolean;
}


export class GetDomain200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain: GetDomain200ApplicationJsonDomain;
}

export enum GetDomain404ApplicationJsonErrorCodeEnum {
    NotFound = "not_found"
}


export class GetDomain404ApplicationJsonError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: GetDomain404ApplicationJsonErrorCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


export class GetDomain404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error: GetDomain404ApplicationJsonError;
}


export class GetDomainRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDomainPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDomainQueryParams;
}


export class GetDomainResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDomain200ApplicationJsonObject?: GetDomain200ApplicationJson;

  @SpeakeasyMetadata()
  getDomain404ApplicationJsonObject?: GetDomain404ApplicationJson;
}
