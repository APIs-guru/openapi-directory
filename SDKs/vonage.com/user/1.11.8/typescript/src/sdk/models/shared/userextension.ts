import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Did } from "./did";



export class UserExtension extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dids", elemType: Did })
  dids?: Did[];

  @SpeakeasyMetadata({ data: "json, name=extension_number" })
  extensionNumber?: string;
}
