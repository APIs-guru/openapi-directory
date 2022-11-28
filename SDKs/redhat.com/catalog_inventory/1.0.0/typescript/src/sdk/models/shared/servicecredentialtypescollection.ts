import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceCredentialType } from "./servicecredentialtype";
import { CollectionLinks } from "./collectionlinks";
import { CollectionMetadata } from "./collectionmetadata";



export class ServiceCredentialTypesCollection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: ServiceCredentialType })
  data?: ServiceCredentialType[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: CollectionLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: CollectionMetadata;
}
