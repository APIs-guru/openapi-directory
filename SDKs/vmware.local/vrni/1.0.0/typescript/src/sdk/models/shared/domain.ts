import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DomainDomainTypeEnum {
    Ldap = "LDAP",
    Local = "LOCAL"
}


export class Domain extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain_type" })
  domainType?: DomainDomainTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
