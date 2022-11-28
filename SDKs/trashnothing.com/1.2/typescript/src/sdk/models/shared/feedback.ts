import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Feedback extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=positive" })
  positive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=reviewer_user_id" })
  reviewerUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: string;
}
