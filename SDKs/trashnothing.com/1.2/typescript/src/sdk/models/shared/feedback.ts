import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Feedback extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=date" })
  date?: Date;

  @Metadata({ data: "json, name=positive" })
  positive?: boolean;

  @Metadata({ data: "json, name=reviewer_user_id" })
  reviewerUserId?: string;

  @Metadata({ data: "json, name=user_id" })
  userId?: string;
}
