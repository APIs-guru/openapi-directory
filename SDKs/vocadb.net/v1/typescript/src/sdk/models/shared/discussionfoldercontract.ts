import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserForApiContract } from "./userforapicontract";



export class DiscussionFolderContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=lastTopicAuthor" })
  lastTopicAuthor?: UserForApiContract;

  @SpeakeasyMetadata({ data: "json, name=lastTopicDate" })
  lastTopicDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=topicCount" })
  topicCount?: number;
}
