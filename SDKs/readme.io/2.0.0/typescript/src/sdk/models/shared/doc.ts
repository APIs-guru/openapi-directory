import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DocTypeEnum {
    Basic = "basic",
    Error = "error",
    Link = "link"
}


export class Doc extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=category" })
  category: string;

  @SpeakeasyMetadata({ data: "json, name=hidden" })
  hidden?: boolean;

  @SpeakeasyMetadata({ data: "json, name=parentDoc" })
  parentDoc?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: DocTypeEnum;
}
