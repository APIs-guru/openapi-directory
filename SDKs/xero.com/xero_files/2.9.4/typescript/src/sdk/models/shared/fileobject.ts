import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";



export class FileObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedDateUtc" })
  createdDateUtc?: string;

  @SpeakeasyMetadata({ data: "json, name=FolderId" })
  folderId?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=MimeType" })
  mimeType?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=UpdatedDateUtc" })
  updatedDateUtc?: string;

  @SpeakeasyMetadata({ data: "json, name=User" })
  user?: User;
}
