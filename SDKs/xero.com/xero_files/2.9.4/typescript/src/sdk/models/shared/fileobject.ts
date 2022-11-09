import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { User } from "./user";


export class FileObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedDateUtc" })
  createdDateUtc?: string;

  @Metadata({ data: "json, name=FolderId" })
  folderId?: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=MimeType" })
  mimeType?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Size" })
  size?: number;

  @Metadata({ data: "json, name=UpdatedDateUtc" })
  updatedDateUtc?: string;

  @Metadata({ data: "json, name=User" })
  user?: User;
}
