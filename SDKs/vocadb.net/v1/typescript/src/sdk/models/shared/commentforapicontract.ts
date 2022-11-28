import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserForApiContract } from "./userforapicontract";
import { EntryRefContract } from "./entryrefcontract";



export class CommentForApiContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=author" })
  author?: UserForApiContract;

  @SpeakeasyMetadata({ data: "json, name=authorName" })
  authorName?: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=entry" })
  entry?: EntryRefContract;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
