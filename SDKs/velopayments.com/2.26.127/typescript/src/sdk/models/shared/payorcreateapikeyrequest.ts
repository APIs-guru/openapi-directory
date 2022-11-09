import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PayorCreateApiKeyRequestRolesEnum {
    PayorAdmin = "payor.admin"
,    PayorSupport = "payor.support"
}


export class PayorCreateApiKeyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=roles" })
  roles: PayorCreateApiKeyRequestRolesEnum[];
}
