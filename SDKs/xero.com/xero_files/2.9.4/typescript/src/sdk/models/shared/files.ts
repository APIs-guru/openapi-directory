import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FileObject } from "./fileobject";


export class Files extends SpeakeasyBase {
  @Metadata({ data: "json, name=Items", elemType: shared.FileObject })
  items?: FileObject[];

  @Metadata({ data: "json, name=Page" })
  page?: number;

  @Metadata({ data: "json, name=PerPage" })
  perPage?: number;

  @Metadata({ data: "json, name=TotalCount" })
  totalCount?: number;
}
