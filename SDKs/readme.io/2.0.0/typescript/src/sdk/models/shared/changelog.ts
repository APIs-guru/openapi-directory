import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ChangelogTypeEnum {
    Unknown = ""
,    Added = "added"
,    Fixed = "fixed"
,    Improved = "improved"
,    Deprecated = "deprecated"
,    Removed = "removed"
}


export class Changelog extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body: string;

  @Metadata({ data: "json, name=hidden" })
  hidden?: boolean;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=type" })
  type?: ChangelogTypeEnum;
}
