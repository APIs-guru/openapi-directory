import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StoryCollaborator } from "./storycollaborator";
import { View } from "./view";


// Session
/** 
 * A user session with an open story
**/
export class Session extends SpeakeasyBase {
  @Metadata({ data: "json, name=collaborator" })
  collaborator?: StoryCollaborator;

  @Metadata({ data: "json, name=collaborator_id" })
  collaboratorId?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=created_by" })
  createdBy?: string;

  @Metadata({ data: "json, name=host" })
  host?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=outline_revision" })
  outlineRevision?: number;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=updated_by" })
  updatedBy?: string;

  @Metadata({ data: "json, name=views", elemType: shared.View })
  views?: View[];
}
