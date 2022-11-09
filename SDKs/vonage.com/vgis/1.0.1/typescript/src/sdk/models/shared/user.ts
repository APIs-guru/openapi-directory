import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UserRoles extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}

export enum UserStatusEnum {
    Pending = "PENDING"
,    Active = "ACTIVE"
,    Deleted = "DELETED"
,    Archived = "ARCHIVED"
}


export class UserUcisHealth extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class UserUcis extends SpeakeasyBase {
  @Metadata({ data: "json, name=health" })
  health?: UserUcisHealth;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=ucpLabel" })
  ucpLabel?: string;
}


export class User extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: number;

  @Metadata({ data: "json, name=acountLabel" })
  acountLabel?: string;

  @Metadata({ data: "json, name=contactNumber" })
  contactNumber?: string;

  @Metadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @Metadata({ data: "json, name=firstName" })
  firstName?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=lastName" })
  lastName?: string;

  @Metadata({ data: "json, name=roles", elemType: shared.UserRoles })
  roles?: UserRoles[];

  @Metadata({ data: "json, name=status" })
  status?: UserStatusEnum;

  @Metadata({ data: "json, name=ucis", elemType: shared.UserUcis })
  ucis?: UserUcis[];
}
