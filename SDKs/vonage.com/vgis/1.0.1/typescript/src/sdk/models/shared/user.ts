import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserRoles extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export enum UserStatusEnum {
    Pending = "PENDING",
    Active = "ACTIVE",
    Deleted = "DELETED",
    Archived = "ARCHIVED"
}


export class UserUcisHealth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class UserUcis extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=health" })
  health?: UserUcisHealth;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=ucpLabel" })
  ucpLabel?: string;
}


export class User extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: number;

  @SpeakeasyMetadata({ data: "json, name=acountLabel" })
  acountLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=contactNumber" })
  contactNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=roles", elemType: UserRoles })
  roles?: UserRoles[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: UserStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=ucis", elemType: UserUcis })
  ucis?: UserUcis[];
}
