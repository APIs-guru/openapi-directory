import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ServiceCredential } from "./servicecredential";
import { CollectionLinks } from "./collectionlinks";
import { CollectionMetadata } from "./collectionmetadata";


export class ServiceCredentialsCollection extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.ServiceCredential })
  data?: ServiceCredential[];

  @Metadata({ data: "json, name=links" })
  links?: CollectionLinks;

  @Metadata({ data: "json, name=meta" })
  meta?: CollectionMetadata;
}
