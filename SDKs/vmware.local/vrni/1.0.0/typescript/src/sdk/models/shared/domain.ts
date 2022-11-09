import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DomainDomainTypeEnum {
    Ldap = "LDAP"
,    Local = "LOCAL"
}


export class Domain extends SpeakeasyBase {
  @Metadata({ data: "json, name=domain_type" })
  domainType?: DomainDomainTypeEnum;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
