import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StoryCollaborator } from "./storycollaborator";
import { View } from "./view";



// Session
/** 
 * A user session with an open story
**/
export class Session extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collaborator" })
  collaborator?: StoryCollaborator;

  @SpeakeasyMetadata({ data: "json, name=collaborator_id" })
  collaboratorId?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=host" })
  host?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=outline_revision" })
  outlineRevision?: number;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updated_by" })
  updatedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=views", elemType: View })
  views?: View[];
}
