import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DocTypeEnum {
    Basic = "basic"
,    Error = "error"
,    Link = "link"
}


export class Doc extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=category" })
  category: string;

  @Metadata({ data: "json, name=hidden" })
  hidden?: boolean;

  @Metadata({ data: "json, name=parentDoc" })
  parentDoc?: string;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=type" })
  type?: DocTypeEnum;
}
