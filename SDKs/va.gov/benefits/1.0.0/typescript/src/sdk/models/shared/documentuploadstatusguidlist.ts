import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DocumentUploadStatusGuidList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids: string[];
}
