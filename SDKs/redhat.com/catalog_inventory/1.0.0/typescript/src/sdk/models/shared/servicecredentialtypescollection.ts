import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ServiceCredentialType } from "./servicecredentialtype";
import { CollectionLinks } from "./collectionlinks";
import { CollectionMetadata } from "./collectionmetadata";


export class ServiceCredentialTypesCollection extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.ServiceCredentialType })
  data?: ServiceCredentialType[];

  @Metadata({ data: "json, name=links" })
  links?: CollectionLinks;

  @Metadata({ data: "json, name=meta" })
  meta?: CollectionMetadata;
}
