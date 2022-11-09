import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceCredential } from "./servicecredential";
import { CollectionLinks } from "./collectionlinks";
import { CollectionMetadata } from "./collectionmetadata";
export declare class ServiceCredentialsCollection extends SpeakeasyBase {
    data?: ServiceCredential[];
    links?: CollectionLinks;
    meta?: CollectionMetadata;
}
