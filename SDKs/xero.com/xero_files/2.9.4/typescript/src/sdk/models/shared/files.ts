import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileObject } from "./fileobject";



export class Files extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Items", elemType: FileObject })
  items?: FileObject[];

  @SpeakeasyMetadata({ data: "json, name=Page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=PerPage" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalCount" })
  totalCount?: number;
}
