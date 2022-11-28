import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AccountStatusEnum {
    Pending = "PENDING",
    Active = "ACTIVE",
    Deleted = "DELETED",
    Archived = "ARCHIVED"
}


export class AccountUcisHealth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class AccountUcis extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=health" })
  health?: AccountUcisHealth;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=ucpAccountId" })
  ucpAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=ucpLabel" })
  ucpLabel?: string;
}


export class Account extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=org" })
  org?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AccountStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=ucis", elemType: AccountUcis })
  ucis?: AccountUcis[];
}
