import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PayorCreateApiKeyRequestRolesEnum {
    PayorAdmin = "payor.admin",
    PayorSupport = "payor.support"
}


export class PayorCreateApiKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=roles" })
  roles: PayorCreateApiKeyRequestRolesEnum[];
}
