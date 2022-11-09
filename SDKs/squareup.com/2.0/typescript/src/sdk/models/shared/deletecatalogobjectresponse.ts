import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";


export class DeleteCatalogObjectResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=deleted_at" })
  deletedAt?: string;

  @Metadata({ data: "json, name=deleted_object_ids" })
  deletedObjectIds?: string[];

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];
}
