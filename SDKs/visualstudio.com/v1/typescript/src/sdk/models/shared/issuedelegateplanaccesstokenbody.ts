import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DelegateIdentity } from "./delegateidentity";



export class IssueDelegatePlanAccessTokenBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environmentIds" })
  environmentIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=expiration" })
  expiration?: Date;

  @SpeakeasyMetadata({ data: "json, name=identity" })
  identity?: DelegateIdentity;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: string;
}
