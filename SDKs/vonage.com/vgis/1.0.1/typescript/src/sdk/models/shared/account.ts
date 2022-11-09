import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AccountStatusEnum {
    Pending = "PENDING"
,    Active = "ACTIVE"
,    Deleted = "DELETED"
,    Archived = "ARCHIVED"
}


export class AccountUcisHealth extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class AccountUcis extends SpeakeasyBase {
  @Metadata({ data: "json, name=health" })
  health?: AccountUcisHealth;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=ucpAccountId" })
  ucpAccountId?: string;

  @Metadata({ data: "json, name=ucpLabel" })
  ucpLabel?: string;
}


export class Account extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=org" })
  org?: string;

  @Metadata({ data: "json, name=status" })
  status?: AccountStatusEnum;

  @Metadata({ data: "json, name=ucis", elemType: shared.AccountUcis })
  ucis?: AccountUcis[];
}
