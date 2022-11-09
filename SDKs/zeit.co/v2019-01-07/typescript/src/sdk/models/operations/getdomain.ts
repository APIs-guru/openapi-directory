import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDomainPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetDomainQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=teamId" })
  teamId?: string;
}


export class GetDomainRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDomainPathParams;

  @Metadata()
  queryParams: GetDomainQueryParams;
}


export class GetDomain200ApplicationJsonDomainAliases extends SpeakeasyBase {
  @Metadata({ data: "json, name=alias" })
  alias: string;

  @Metadata({ data: "json, name=created" })
  created: number;

  @Metadata({ data: "json, name=id" })
  id: string;
}


export class GetDomain200ApplicationJsonDomainCerts extends SpeakeasyBase {
  @Metadata({ data: "json, name=cns" })
  cns: string[];

  @Metadata({ data: "json, name=created" })
  created: number;

  @Metadata({ data: "json, name=id" })
  id: string;
}


// GetDomain200ApplicationJsonDomainCreator
/** 
 * Information about who added the domain
**/
export class GetDomain200ApplicationJsonDomainCreator extends SpeakeasyBase {
  @Metadata({ data: "json, name=customerId" })
  customerId?: string;

  @Metadata({ data: "json, name=email" })
  email: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=isDomainReseller" })
  isDomainReseller?: boolean;

  @Metadata({ data: "json, name=username" })
  username: string;
}

export enum GetDomain200ApplicationJsonDomainServiceTypeEnum {
    ZeitWorld = "zeit.world"
,    External = "external"
,    Na = "na"
}


// GetDomain200ApplicationJsonDomain
/** 
 * The domain information
**/
export class GetDomain200ApplicationJsonDomain extends SpeakeasyBase {
  @Metadata({ data: "json, name=aliases", elemType: operations.GetDomain200ApplicationJsonDomainAliases })
  aliases: GetDomain200ApplicationJsonDomainAliases[];

  @Metadata({ data: "json, name=boughtAt" })
  boughtAt: number;

  @Metadata({ data: "json, name=cdnEnabled" })
  cdnEnabled: boolean;

  @Metadata({ data: "json, name=certs", elemType: operations.GetDomain200ApplicationJsonDomainCerts })
  certs: GetDomain200ApplicationJsonDomainCerts[];

  @Metadata({ data: "json, name=createdAt" })
  createdAt: number;

  @Metadata({ data: "json, name=creator" })
  creator: GetDomain200ApplicationJsonDomainCreator;

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
  serviceType: GetDomain200ApplicationJsonDomainServiceTypeEnum;

  @Metadata({ data: "json, name=suffix" })
  suffix: boolean;

  @Metadata({ data: "json, name=transferredAt" })
  transferredAt?: number;

  @Metadata({ data: "json, name=txtVerifiedAt" })
  txtVerifiedAt: number;

  @Metadata({ data: "json, name=verificationRecord" })
  verificationRecord: string;

  @Metadata({ data: "json, name=verified" })
  verified: boolean;
}


export class GetDomain200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=domain" })
  domain: GetDomain200ApplicationJsonDomain;
}

export enum GetDomain404ApplicationJsonErrorCodeEnum {
    NotFound = "not_found"
}


export class GetDomain404ApplicationJsonError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: GetDomain404ApplicationJsonErrorCodeEnum;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}


export class GetDomain404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error: GetDomain404ApplicationJsonError;
}


export class GetDomainResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDomain200ApplicationJsonObject?: GetDomain200ApplicationJson;

  @Metadata()
  getDomain404ApplicationJsonObject?: GetDomain404ApplicationJson;
}
