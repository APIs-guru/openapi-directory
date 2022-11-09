import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Did } from "./did";


export class UserExtension extends SpeakeasyBase {
  @Metadata({ data: "json, name=dids", elemType: shared.Did })
  dids?: Did[];

  @Metadata({ data: "json, name=extension_number" })
  extensionNumber?: string;
}
