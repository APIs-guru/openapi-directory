import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DelegateIdentity } from "./delegateidentity";


export class IssueDelegatePlanAccessTokenBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=environmentIds" })
  environmentIds?: string[];

  @Metadata({ data: "json, name=expiration" })
  expiration?: Date;

  @Metadata({ data: "json, name=identity" })
  identity?: DelegateIdentity;

  @Metadata({ data: "json, name=scope" })
  scope?: string;
}
