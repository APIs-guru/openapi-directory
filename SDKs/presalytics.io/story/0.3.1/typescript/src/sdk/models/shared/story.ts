import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StoryCollaborator } from "./storycollaborator";
import { OoxmlDocument } from "./ooxmldocument";
import { StoryOutlineHistory } from "./storyoutlinehistory";



// Story
/** 
 * Model for story objects
**/
export class Story extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collaborators", elemType: StoryCollaborator })
  collaborators?: StoryCollaborator[];

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=is_public" })
  isPublic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ooxml_documents", elemType: OoxmlDocument })
  ooxmlDocuments?: OoxmlDocument[];

  @SpeakeasyMetadata({ data: "json, name=outline" })
  outline?: string;

  @SpeakeasyMetadata({ data: "json, name=outline_history", elemType: StoryOutlineHistory })
  outlineHistory?: StoryOutlineHistory[];

  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updated_by" })
  updatedBy?: string;
}
