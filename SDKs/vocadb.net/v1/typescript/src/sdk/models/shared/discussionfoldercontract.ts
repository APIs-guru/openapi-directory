import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserForApiContract } from "./userforapicontract";


export class DiscussionFolderContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=lastTopicAuthor" })
  lastTopicAuthor?: UserForApiContract;

  @Metadata({ data: "json, name=lastTopicDate" })
  lastTopicDate?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=topicCount" })
  topicCount?: number;
}
