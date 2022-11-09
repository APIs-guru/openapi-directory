import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceCredentialType } from "./servicecredentialtype";
import { CollectionLinks } from "./collectionlinks";
import { CollectionMetadata } from "./collectionmetadata";
export declare class ServiceCredentialTypesCollection extends SpeakeasyBase {
    data?: ServiceCredentialType[];
    links?: CollectionLinks;
    meta?: CollectionMetadata;
}
