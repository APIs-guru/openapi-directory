import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ChangelogTypeEnum {
    Unknown = "",
    Added = "added",
    Fixed = "fixed",
    Improved = "improved",
    Deprecated = "deprecated",
    Removed = "removed"
}


export class Changelog extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body: string;

  @SpeakeasyMetadata({ data: "json, name=hidden" })
  hidden?: boolean;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ChangelogTypeEnum;
}
