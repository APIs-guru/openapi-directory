import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StoryCollaborator } from "./storycollaborator";
import { OoxmlDocument } from "./ooxmldocument";
import { StoryOutlineHistory } from "./storyoutlinehistory";


// Story
/** 
 * Model for story objects
**/
export class Story extends SpeakeasyBase {
  @Metadata({ data: "json, name=collaborators", elemType: shared.StoryCollaborator })
  collaborators?: StoryCollaborator[];

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=created_by" })
  createdBy?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=is_public" })
  isPublic?: boolean;

  @Metadata({ data: "json, name=ooxml_documents", elemType: shared.OoxmlDocument })
  ooxmlDocuments?: OoxmlDocument[];

  @Metadata({ data: "json, name=outline" })
  outline?: string;

  @Metadata({ data: "json, name=outline_history", elemType: shared.StoryOutlineHistory })
  outlineHistory?: StoryOutlineHistory[];

  @Metadata({ data: "json, name=revision" })
  revision?: number;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=updated_by" })
  updatedBy?: string;
}
